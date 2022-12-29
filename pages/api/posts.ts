import { writeToDb } from './../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../lib/post-utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const post: Post = req.body;
    if (!post.avatar || !post.image || !post.name || !post.text || !post.title || !post.date) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }
    try {
      await writeToDb(process.env.FIREBASE_BD_POSTS!, post);
    } catch (error) {
      console.log(error || 'Something wrong with FireBase');
    }
    res.status(201).json({ message: 'Success' });
  }
}
