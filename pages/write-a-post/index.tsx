import Head from 'next/head';
import React from 'react';
import { HeroBanner } from '../../components';
import { WritePostForm } from '../../components/write-post-form/write-post-form';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';

type WriteAPostPageProps = {
  session: Session;
};

const WriteAPostPage = ({ session }: WriteAPostPageProps) => {
  return (
    <>
      <Head>
        <title>Write a post</title>
      </Head>
      <HeroBanner title='Write a post' description='Tell to the world what you think' />
      <WritePostForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  } else
    return {
      props: { session },
    };
};

export default WriteAPostPage;
