import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { HeroBanner } from '../../components';
import { WritePostForm } from '../../components/write-post-form/write-post-form';
import { getSession } from 'next-auth/react';

const WriteAPostPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = '/auth';
      } else setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <></>;
  }

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

export default WriteAPostPage;
