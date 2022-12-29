import { writeToDb } from './../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Contact } from '../../lib/contact-utils';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name, email, text } = req.body;
    if (!name || !email || !text) {
      res.status(400).json({ message: 'Contact form data incorrect' });
      return;
    }
    try {
      const contact: Contact = {
        name,
        email,
        text,
      };
      await writeToDb(process.env.FIREBASE_BD_CONTACTS!, contact);
    } catch (error) {
      console.log(error);
    }
  }
  res.status(201).json({ message: 'Success' });
}
