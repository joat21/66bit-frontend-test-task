import { FC } from 'react';
import styles from './Top.module.scss';
import { Input } from '@UI';
import { Filters } from '../Filters';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';

interface TopProps {
  filters: FetchEmployeesUrlParams;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
}

export const Top: FC<TopProps> = ({ filters, setFilters }) => {
  return (
    <section className={styles['section']}>
      <div className={styles['top']}>
        <h1>Список сотрудников</h1>
        <Filters filters={filters} setFilters={setFilters} />
      </div>
      <Input
        type="text"
        value={filters.name || ''}
        placeholder="Поиск"
        onChange={(e) => setFilters({ name: e.target.value })}
      />
      <input />
    </section>
  );
};
