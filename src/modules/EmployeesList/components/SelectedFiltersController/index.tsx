import { FC } from 'react';
import styles from './SelectedFiltersController.module.scss';
import { SelectedFilter } from '../SelectedFilter';

export const SelectedFiltersController: FC = () => {
  return (
    <div className={styles['selected-filters__controller']}>
      <span>Выбранные фильтры:</span>
      <ul className={styles['selected-filters__controller-items']}>
        {['fullstack', 'женщина'].map((filterName) => (
          <li key={filterName}>
            <SelectedFilter filterName={filterName} />
          </li>
        ))}
      </ul>
    </div>
  );
};
