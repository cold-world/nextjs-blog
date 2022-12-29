import { writeToDb } from './../../../lib/db';
import { hashPassword } from '../../../lib/auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import { checkExistingUser } from '../../../lib/db';

export type User = {
  email: string;
  password: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password }: User = req.body;
    if (!email || !email.includes('@') || !password || password.trim().length < 6) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    if (await checkExistingUser(email)) {
      res.status(422).json({ message: 'User exist' });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const user: User = {
      email,
      password: hashedPassword,
    };

    await writeToDb(process.env.FIREBASE_BD_USERS!, user);
    res.status(201).json({ message: 'Created user' });
  }
}
