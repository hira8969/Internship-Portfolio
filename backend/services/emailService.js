import nodemailer from 'nodemailer';

export async function sendContactEmail(contact) {
  if (!process.env.SMTP_USER || !process.env.CONTACT_TO_EMAIL) return;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: Number(process.env.SMTP_TIMEOUT_MS || 8000),
    greetingTimeout: Number(process.env.SMTP_TIMEOUT_MS || 8000),
    socketTimeout: Number(process.env.SMTP_TIMEOUT_MS || 8000)
  });
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    subject: contact.subject || `New message from ${contact.name}`,
    text: `${contact.name} <${contact.email}>\n\n${contact.message}`
  });
}
