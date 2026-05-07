import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.startsWith('Bearer ') ? req.headers.authorization.split(' ')[1] : null;
  if (!token) {
    const error = new Error('Authentication required');
    error.statusCode = 401;
    throw error;
  }
  const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  const user = await User.findById(decoded.id).select('-password');
  if (!user || !user.isActive) {
    const error = new Error('Invalid session');
    error.statusCode = 401;
    throw error;
  }
  req.user = user;
  next();
});

export const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    const error = new Error('Insufficient permissions');
    error.statusCode = 403;
    return next(error);
  }
  next();
};
