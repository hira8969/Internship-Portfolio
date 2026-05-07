import { asyncHandler } from '../utils/asyncHandler.js';
import { buildQuery } from '../utils/apiFeatures.js';
import ActivityLog from '../models/ActivityLog.js';

export const list = (Model, searchFields = []) => asyncHandler(async (req, res) => {
  const features = buildQuery(Model, req.query, searchFields);
  const [items, total] = await Promise.all([features.query, Model.countDocuments(features.filter)]);
  res.json({ success: true, data: { items, pagination: { page: features.page, limit: features.limit, total, pages: Math.ceil(total / features.limit) } } });
});

export const getOne = (Model, key = '_id') => asyncHandler(async (req, res) => {
  const value = req.params[key] || req.params.id;
  const query = key === 'slug' ? { slug: value } : { _id: value };
  const item = await Model.findOne(query);
  if (!item) {
    const error = new Error('Resource not found');
    error.statusCode = 404;
    throw error;
  }
  res.json({ success: true, data: { item } });
});

export const createOne = (Model, entity) => asyncHandler(async (req, res) => {
  const item = await Model.create(req.body);
  if (req.user) await ActivityLog.create({ actor: req.user._id, action: 'create', entity, entityId: item._id, ip: req.ip });
  res.status(201).json({ success: true, data: { item } });
});

export const updateOne = (Model, entity) => asyncHandler(async (req, res) => {
  const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) {
    const error = new Error('Resource not found');
    error.statusCode = 404;
    throw error;
  }
  if (req.user) await ActivityLog.create({ actor: req.user._id, action: 'update', entity, entityId: item._id, ip: req.ip });
  res.json({ success: true, data: { item } });
});

export const deleteOne = (Model, entity) => asyncHandler(async (req, res) => {
  const item = await Model.findByIdAndDelete(req.params.id);
  if (!item) {
    const error = new Error('Resource not found');
    error.statusCode = 404;
    throw error;
  }
  if (req.user) await ActivityLog.create({ actor: req.user._id, action: 'delete', entity, entityId: item._id, ip: req.ip });
  res.json({ success: true, data: { deleted: true } });
});
