import React from 'react';
import Image from 'next/image';
import styles from './post-header.module.css';

type PostHeaderProps = {
  title: string;
  avatar: string;
  date: string;
  name: string;
  image: string;
};

export const PostHeader = ({ title, avatar, date, name, image }: PostHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Image src={image} alt={title} width={650} height={400} />
      </div>
      <Image
        style={{ borderRadius: '50%', marginTop: '2rem', objectFit:'cover' }}
        src={avatar}
        alt={name}
        width={80}
        height={80}
      />
      <div className={styles.credits}>
        <span>{name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};
