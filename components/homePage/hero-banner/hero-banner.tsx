import React from 'react';
import styles from './hero-banner.module.css';

type HeroBannerProps = {
  title: string;
  description: string;
};

export const HeroBanner = ({ title, description }: HeroBannerProps) => {
  return (
    <section className={styles.banner}>
      <span>Simple blog</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};
