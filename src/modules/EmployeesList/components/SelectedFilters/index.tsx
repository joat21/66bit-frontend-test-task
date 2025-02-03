import { FC } from 'react';
import styles from './SelectedFilters.module.scss';
import { Button } from '@UI';
import { SelectedFiltersController } from '../SelectedFiltersController';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';

interface SelectedFiltersProps {
  filters: FetchEmployeesUrlParams;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
  setUrlParams: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
}

export const SelectedFilters: FC<SelectedFiltersProps> = ({
  filters,
  setFilters,
  setUrlParams,
}) => {
  return (
    <section className={styles['section']}>
      <div className={styles['wrapper']}>
        <SelectedFiltersController filters={filters} setFilters={setFilters} />
        <Button className={styles['btn']} onClick={() => setUrlParams(filters)}>
          Найти
        </Button>
      </div>
    </section>
  );
};
