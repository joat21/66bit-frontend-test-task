import { FC } from 'react';
import { Loader as UILoader } from '@UI';
import styles from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={styles['loader']}>
      <UILoader />
    </div>
  );
};
