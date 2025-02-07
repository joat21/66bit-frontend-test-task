import { FC } from 'react';
import classNames from 'classnames';

import { Button, Container } from '@UI';
import { SelectedFiltersController } from '../SelectedFiltersController';

import { FetchEmployeesUrlParams } from '../../types';

import styles from './SelectedFilters.module.scss';
import { objectToSearchParams } from '@helpers/objectToSearchParams';
import { SetURLSearchParams } from 'react-router-dom';

interface SelectedFiltersProps {
  filters: FetchEmployeesUrlParams;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
  setSearchParams: SetURLSearchParams;
}

export const SelectedFilters: FC<SelectedFiltersProps> = ({
  filters,
  setFilters,
  setSearchParams,
}) => {
  return (
    <section className={classNames(styles['selected-filters'])}>
      <Container className={styles['container']}>
        <SelectedFiltersController filters={filters} setFilters={setFilters} />
        <Button
          className={styles['btn']}
          onClick={() => setSearchParams(objectToSearchParams(filters))}
        >
          Найти
        </Button>
      </Container>
    </section>
  );
};
