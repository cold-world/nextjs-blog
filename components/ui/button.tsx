import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './button.module.css';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  name: string;
}

export const Button: React.FC<ButtonProps> = ({ name, ...props }): JSX.Element => {
  return (
    <button {...props} className={styles.button}>
      {name}
    </button>
  );
};
