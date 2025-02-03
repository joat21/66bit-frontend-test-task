import { FC } from 'react';
import { Dropdown } from '../Dropdown';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';
import styles from './Filters.module.scss';

interface FiltersProps {
  filters: FetchEmployeesUrlParams;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
}

const POSITIONS = ['Frontend', 'Backend', 'Analyst', 'Manager', 'Designer'];
const GENDERS = ['Male', 'Female'];
const STACK = ['CSharp', 'React', 'Java', 'PHP', 'Figma', 'Word'];

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
