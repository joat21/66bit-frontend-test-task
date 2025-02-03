import { FC } from 'react';
import styles from './SelectedFilter.module.scss';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';

interface SelectedFilterProps {
  filterName: string;
  options: any[];
  optionName: string;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
}

export const SelectedFilter: FC<SelectedFilterProps> = ({
  filterName,
  options,
  optionName,
  setFilters,
}) => {
  const handleDelete = () => {
    const newOptions = options.filter((option) => option !== optionName);
    setFilters((prev) => ({ ...prev, [filterName]: newOptions }));
  };
  return (
    <span className={styles['selected-filters__controller-item']}>
      <span onClick={handleDelete}>X</span>
      <span>{optionName}</span>
    </span>
  );
};
