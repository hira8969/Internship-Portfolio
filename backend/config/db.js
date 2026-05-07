import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

export default async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    logger.warn('MONGO_URI is missing. API will start only after you configure .env.');
    return null;
  }
  mongoose.set('strictQuery', true);
  try {
    const connection = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    logger.info(`MongoDB connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    logger.error(`MongoDB connection failed: ${error.message}`);
    logger.warn('API is still running. Contact messages will use local fallback storage until MongoDB is fixed.');
    return null;
  }
}
