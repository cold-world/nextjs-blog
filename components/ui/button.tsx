import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  name: string;
};

export const Button = ({name}: ButtonProps) => {
  return <button className={styles.button}>{name}</button>;
};
