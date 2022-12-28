import styles from './posts-grid.module.css';
import { PostItem } from '../index';
import { Post } from '../../lib/post-utils';

type PostsGridProps = {
  posts: Post[];
};

export const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.title} posts={post} />
      ))}
    </ul>
  );
};
