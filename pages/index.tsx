import React from 'react';
import { HeroBanner, FeaturedPosts } from '../components';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { getFeturedPosts, Post } from '../lib/post-utils';
import Head from 'next/head';

type HomePageProps = {
  posts: Post[];
};

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Bloggy</title>
        <meta name='description' content='A good place for a good text' />
      </Head>
      <HeroBanner title='Featured posts' description='All latest news about everything' />
      <FeaturedPosts posts={posts} />
    </>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomePageProps>
> => {
  const data = await getFeturedPosts();
  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
};
