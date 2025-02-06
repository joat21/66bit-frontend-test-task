import { FC } from 'react';

import { Container, Input } from '@UI';
import { Filters } from '../Filters';

import { FetchEmployeesUrlParams } from '../../types';

import styles from './Top.module.scss';

interface TopProps {
  filters: FetchEmployeesUrlParams;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
}

export const Top: FC<TopProps> = ({ filters, setFilters }) => {
  return (
    <Container className={styles['section']} as="section">
      <h1>Список сотрудников</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <Input
        type="text"
        value={filters.name || ''}
        placeholder="Поиск"
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, name: e.target.value }))
        }
      />
    </Container>
  );
};
