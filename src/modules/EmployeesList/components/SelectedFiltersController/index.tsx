import { FC } from 'react';
import { SelectedFilter } from '../SelectedFilter';
import { FetchEmployeesUrlParams } from '../../types';
import styles from './SelectedFiltersController.module.scss';

interface SelectedFiltersControllerProps {
  filters: FetchEmployeesUrlParams;
  setFilters: React.Dispatch<React.SetStateAction<FetchEmployeesUrlParams>>;
}

export const SelectedFiltersController: FC<SelectedFiltersControllerProps> = ({
  filters,
  setFilters,
}) => {
  const selectedFiltersArray = Object.entries(filters);
  const isAnyFiltersSelected =
    Object.values(filters)
      .filter((item) => Array.isArray(item))
      .flat().length > 0;

  return (
    <div className={styles['selected-filters__controller']}>
      <span className={styles['caption']}>Выбранные фильтры:</span>
      {isAnyFiltersSelected && (
        <ul className={styles['selected-filters__controller-items']}>
          {selectedFiltersArray.map(([key, value]) => {
            if (!Array.isArray(value)) return null;
            return value.map((item) => (
              <li key={item}>
                <SelectedFilter
                  filterName={key}
                  options={
                    filters[key as keyof Omit<FetchEmployeesUrlParams, 'name'>]
                  }
                  optionName={item}
                  setFilters={setFilters}
                />
              </li>
            ));
          })}
        </ul>
      )}
    </div>
  );
};
