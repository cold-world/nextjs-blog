import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../lib/post-utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const post: Post = req.body;
    if (!post.avatar || !post.image || !post.name || !post.text || !post.title || !post.date) {
      res.status(400).json({ message: 'Invalid request' });
      return;
    }
    try {
      const response = await fetch(process.env.FIREBASE_BD_POSTS!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
    } catch (error) {
      console.log(error || 'Something wrong with FireBase');
    }
    res.status(201).json({ message: 'Success' });
  }
}
