import { FC } from 'react';
import styles from './SelectedFilters.module.scss';
import { Button } from '@UI';
import { SelectedFiltersController } from '../SelectedFiltersController';
import { FetchEmployeesUrlParams } from '../EmployeesList';

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
        <SelectedFiltersController />
        <Button className={styles['btn']} onClick={() => setUrlParams(filters)}>
          Найти
        </Button>
      </div>
    </section>
  );
};
