import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { useRouter } from 'next/router';
import { Button } from '../../ui/button';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  const router = useRouter();

  const getLinkByPage = (): string => {
    if (router.pathname === '/all-posts') return '/';
    else return '/all-posts';
  };
  const getLinkNameByPage = (): string => {
    if (router.pathname === '/all-posts') return 'Feature posts';
    else return 'All posts';
  };

  return (
    <header className={styles.header}>
      <Link href='/'>
        <h1>Bloggy</h1>
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href={getLinkByPage()}>{getLinkNameByPage()}</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href='/write-a-post'>
          <Button name='Write a post' />
        </Link>
      </div>
    </header>
  );
};
