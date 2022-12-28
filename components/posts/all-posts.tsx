import React from 'react';
import { Post } from '../../lib/post-utils';
import styles from './all-posts.module.css';
import { PostsGrid } from './posts-grid';

type AllPostsProps = {
  posts: Post[];
};

export const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section className={styles.section}>
      <PostsGrid posts={posts} />
    </section>
  );
};
