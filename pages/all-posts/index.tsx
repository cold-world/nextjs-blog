import { GetStaticProps, GetStaticPropsResult } from 'next';
import React from 'react';
import { HeroBanner } from '../../components';
import { AllPosts } from '../../components/posts/all-posts';
import { getAllPosts, Post } from '../../lib/post-utils';
import Head from 'next/head';

type AllPostsPageProps = {
  allPosts: Post[];
};

const AllPostsPage = ({ allPosts }: AllPostsPageProps) => {
  console.log(allPosts);
  return (
    <>
    <Head>
      <title>All post here</title>
    </Head>
      <HeroBanner title='All posts' description='All posts on one page' />
      <AllPosts posts={allPosts} />
    </>
  );
};

export default AllPostsPage;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<AllPostsPageProps>
> => {
  const data = await getAllPosts();
  return {
    props: {
      allPosts: data,
    },
    revalidate: 10,
  };
};
