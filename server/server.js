import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import app from './app.js';
import connectDB from './config/db.js';
import { logger } from './utils/logger.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config();

const port = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(port, () => logger.info(`API running on port ${port}`));
});
