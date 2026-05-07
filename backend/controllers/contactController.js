import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { logger } from '../utils/logger.js';
import { sendContactEmail } from '../services/emailService.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fallbackPath = path.resolve(__dirname, '../data/contacts.json');

async function saveContactFallback(contact) {
  await fs.mkdir(path.dirname(fallbackPath), { recursive: true });
  let contacts = [];
  try {
    contacts = JSON.parse(await fs.readFile(fallbackPath, 'utf8'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  const item = {
    _id: `local-${Date.now()}`,
    ...contact,
    status: 'new',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  contacts.push(item);
  await fs.writeFile(fallbackPath, JSON.stringify(contacts, null, 2));
  return item;
}

export const createContact = asyncHandler(async (req, res) => {
  const payload = { ...req.body, ip: req.ip, userAgent: req.get('user-agent') };
  let contact;

  try {
    contact = mongoose.connection.readyState === 1
      ? await Contact.create(payload)
      : await saveContactFallback(payload);
  } catch (error) {
    logger.error(`Contact database save failed: ${error.message}`);
    contact = await saveContactFallback(payload);
  }

  res.status(201).json({ success: true, data: { item: contact } });
  sendContactEmail(contact).catch(() => null);
});
