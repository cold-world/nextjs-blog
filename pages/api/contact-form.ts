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
      const response = await fetch(process.env.FIREBASE_BD_CONTACTS!, {
        method: 'POST',
        headers: {
          'Contect-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  }
  res.status(201).json({ message: 'Success' });
}
