import React, { ReactNode } from 'react';
import { Header } from '../header/header';
import { useContext } from 'react';
import StatusContext from '../../../context/context';
import { StatusMessage } from '../../ui/status-message';
import styles from './layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { status } = useContext(StatusContext);

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      {status && <StatusMessage status={status} />}
    </>
  );
};
