import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './post.module.css';
import { Post } from '../../lib/post-utils';

interface PostProps extends HTMLAttributes<HTMLLIElement> {
  posts: Post;
}

export const PostItem = ({ posts, ...props }: PostProps) => {
  const titleToPath = () => {
    return posts.title.replaceAll(' ', '-');
  };
  
  return (
    <li {...props} className={styles.post}>
      <Link href={`/post/${titleToPath()}`}>
        <Image
          style={{ objectFit: 'cover' }}
          alt={posts.title}
          src={posts.image}
          width={400}
          height={300}
        />
      </Link>

      <h3 className={styles.title}>{posts.title}</h3>
      <div className={styles.credits}>
        <Image
          alt='avatar'
          src={posts.avatar}
          width={60}
          height={60}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
        <div className={styles.author_date}>
          <span>Author: {posts.name}</span>
          <time>{posts.date}</time>
        </div>
      </div>
    </li>
  );
};
