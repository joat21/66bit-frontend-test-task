import { FC } from 'react';
import styles from './SelectedFiltersController.module.scss';
import { SelectedFilter } from '../SelectedFilter';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';

interface SelectedFiltersControllerProps {
  filters: FetchEmployeesUrlParams;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
}

export const SelectedFiltersController: FC<SelectedFiltersControllerProps> = ({
  filters,
  setFilters,
}) => {
  const selectedFiltersArray = Object.entries(filters);
  return (
    <div className={styles['selected-filters__controller']}>
      <span>Выбранные фильтры:</span>
      <ul className={styles['selected-filters__controller-items']}>
        {selectedFiltersArray.map(([key, value]) => {
          if (!Array.isArray(value)) return null;
          return value.map((item) => (
            <li key={item}>
              <SelectedFilter
                filterName={key}
                options={filters[key]}
                optionName={item}
                setFilters={setFilters}
              />
            </li>
          ));
        })}
      </ul>
    </div>
  );
};
