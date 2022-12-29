import React from 'react';
import { Status } from '../../context/context';
import styles from './status-message.module.css';
import { ThreeCircles } from 'react-loader-spinner';
import ReactDOM from 'react-dom';

type StatusMessageProps = {
  status?: Status | 'loading';
};

export const StatusMessage = ({ status }: StatusMessageProps) => {
  return ReactDOM.createPortal(
    <div className={styles.spinner_wrapper}>
      <div className={styles.spinner}>
        <ThreeCircles
          height='50'
          width='50'
          color='#4fa94d'
          visible={true}
          ariaLabel='three-circles-rotating'
          outerCircleColor='black'
          innerCircleColor='black'
          middleCircleColor='black'
        />
        <span>{status}</span>
      </div>
    </div>,
    //@ts-ignore
    document.getElementById('status-message')
  );
};
