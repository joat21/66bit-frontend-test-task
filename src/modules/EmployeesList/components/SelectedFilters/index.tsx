import { FC } from 'react';
import classNames from 'classnames';

import { Button, Container } from '@UI';
import { SelectedFiltersController } from '../SelectedFiltersController';

import { FetchEmployeesUrlParams } from '../../types';

import styles from './SelectedFilters.module.scss';

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
