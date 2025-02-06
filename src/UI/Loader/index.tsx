import { FC } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  size?: number;
}

export const Loader: FC<LoaderProps> = ({ size = 50 }) => {
  return (
    <span style={{ width: size, height: size }} className={styles['loader']} />
  );
};
