import { FC, useState } from 'react';
import styles from './Filters.module.scss';
import {
  FetchEmployeesUrlParams,
  Gender,
  Position,
  Stack,
} from '@modules/EmployeesList/types';
import { Dropdown } from '../Dropdown';

interface FiltersProps {
  filters: FetchEmployeesUrlParams;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
}

const POSITIONS = Object.values(Position).filter((item) => {
  return isNaN(Number(item));
});

const GENDERS = Object.values(Gender).filter((item) => {
  return isNaN(Number(item));
});

const STACK = Object.values(Stack).filter((item) => {
  return isNaN(Number(item));
});

export const Filters: FC<FiltersProps> = ({ filters, setFilters }) => {
  return (
    <div className={styles['wrapper']}>
      <Dropdown
        filterName="position"
        selectedItems={filters.position}
        setFilters={setFilters}
        options={POSITIONS}
      />
      <Dropdown
        filterName="gender"
        selectedItems={filters.gender}
        setFilters={setFilters}
        options={GENDERS}
      />
      <Dropdown
        filterName="stack"
        selectedItems={filters.stack}
        setFilters={setFilters}
        options={STACK}
      />
    </div>
  );
};
