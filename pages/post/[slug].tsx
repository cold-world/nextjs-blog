import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { PostDetail, PostHeader } from '../../components';
import { Post } from '../../lib/post-utils';
import Head from 'next/head';

type PostPageProps = {
  post: Post;
};

const PostPage = ({ post }: PostPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        {}
        <PostHeader
          title={post.title}
          avatar={post.avatar}
          date={post.date}
          name={post.name}
          image={post.image}
        />
        <PostDetail text={post.text} />
      </article>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostPageProps>> => {
  const pathName = context.params?.slug;
  if (!pathName) return { notFound: true };
  if (Array.isArray(pathName)) return { notFound: true };

  const pathNameToString = pathName.replaceAll('-', ' ');
  console.log(pathNameToString);

  const response = await fetch(
    'https://next-js-practice-4b828-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
  );
  const data: { any: Post } = await response.json();
  const arrayFromData = Object.values(data).map((item) => item);
  const post = arrayFromData.find((item) => item.title === pathNameToString);
  if (!post) return { notFound: true };
  return {
    props: {
      post,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  const data = await fetch(
    'https://next-js-practice-4b828-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
  );
  const arrayFromData = Object.values(data).map((item) => item);
  const params = arrayFromData.map((title) => ({ params: { title: title } }));
  return {
    paths: params,
    fallback: 'blocking',
  };
};
