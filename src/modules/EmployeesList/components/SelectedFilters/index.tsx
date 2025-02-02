import { FC } from 'react';
import styles from './SelectedFilters.module.scss';
import { Button } from '@UI';
import { SelectedFiltersController } from '../SelectedFiltersController';

export const SelectedFilters: FC = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['wrapper']}>
        <SelectedFiltersController />
        <Button className={styles['btn']}>Найти</Button>
      </div>
    </section>
  );
};
