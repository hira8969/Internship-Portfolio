import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { setRefreshCookie, signAccessToken, signRefreshToken } from '../helpers/tokens.js';

const publicUser = (user) => ({ id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar });

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }
  user.lastLoginAt = new Date();
  await user.save();
  const accessToken = signAccessToken(user);
  setRefreshCookie(res, signRefreshToken(user));
  res.json({ success: true, data: { user: publicUser(user), accessToken } });
});

export const refresh = asyncHandler(async (req, res) => {
  const token = req.signedCookies.refreshToken;
  if (!token) {
    const error = new Error('Refresh token missing');
    error.statusCode = 401;
    throw error;
  }
  const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  const user = await User.findById(decoded.id);
  if (!user || user.tokenVersion !== decoded.tokenVersion) {
    const error = new Error('Refresh token revoked');
    error.statusCode = 401;
    throw error;
  }
  const accessToken = signAccessToken(user);
  setRefreshCookie(res, signRefreshToken(user));
  res.json({ success: true, data: { accessToken, user: publicUser(user) } });
});

export const me = asyncHandler(async (req, res) => {
  res.json({ success: true, data: { user: publicUser(req.user) } });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie('refreshToken');
  res.json({ success: true, data: { loggedOut: true } });
});

export const forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
    await user.save();
  }
  res.json({ success: true, message: 'If the email exists, a reset link has been generated.' });
});

export const resetPassword = asyncHandler(async (req, res) => {
  const hashed = crypto.createHash('sha256').update(req.params.token).digest('hex');
  const user = await User.findOne({ resetPasswordToken: hashed, resetPasswordExpires: { $gt: Date.now() } });
  if (!user) {
    const error = new Error('Reset token is invalid or expired');
    error.statusCode = 400;
    throw error;
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  user.tokenVersion += 1;
  await user.save();
  res.json({ success: true, message: 'Password reset successful' });
});
