import { FC } from 'react';
import styles from './Top.module.scss';
import { Input } from '@UI';

export const Top: FC = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['top']}>
        <h1>Список сотрудников</h1>
        <span>filters</span>
      </div>
      <Input type="text" placeholder="Поиск" />
      <input />
    </section>
  );
};
