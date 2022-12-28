import React from 'react';
import { Post } from '../../../lib/post-utils';
import { PostsGrid } from '../../posts/posts-grid';
import styles from './featured-posts.module.css';

type FeaturedPostsProps = {
  posts: Post[];
};

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className={styles.section}>
      <PostsGrid posts={posts} />
    </section>
  );
};
