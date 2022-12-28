import React from 'react';
import { HeroBanner } from '../../components';
import { WritePostForm } from '../../components/write-post-form/write-post-form';

type WriteAPostPageProps = {};

const WriteAPostPage = (props: WriteAPostPageProps) => {
  return (
    <>
      <HeroBanner title='Write a post' description='Tell to the world what you think' />
      <WritePostForm />
    </>
  );
};

export default WriteAPostPage;
