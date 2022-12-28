import React from 'react';
import { PostHeader } from '../../index';

type PostDetailProps = {
  text: string;
};

export const PostDetail = ({ text }: PostDetailProps) => {
  return (
    <div>
      <p style={{fontSize: '1.5rem', padding: '5rem'}}>{text}</p>
    </div>
  );
};
