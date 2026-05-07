import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

export default async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    logger.warn('MONGO_URI is missing. API will start only after you configure .env.');
    return;
  }
  mongoose.set('strictQuery', true);
  const connection = await mongoose.connect(uri);
  logger.info(`MongoDB connected: ${connection.connection.host}`);
}
