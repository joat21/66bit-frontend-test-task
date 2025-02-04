import { FC } from 'react';
import styles from './SelectedFilters.module.scss';
import { Button, Container } from '@UI';
import { SelectedFiltersController } from '../SelectedFiltersController';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';
import classNames from 'classnames';

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
    <section className={classNames(styles['selected-filters'])}>
      <Container className={styles['container']}>
        <SelectedFiltersController filters={filters} setFilters={setFilters} />
        <Button className={styles['btn']} onClick={() => setUrlParams(filters)}>
          Найти
        </Button>
      </Container>
    </section>
  );
};
