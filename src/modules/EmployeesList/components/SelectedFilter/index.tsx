import { FC } from 'react';
import styles from './SelectedFilter.module.scss';

interface SelectedFilterProps {
  filterName: string;
}

export const SelectedFilter: FC<SelectedFilterProps> = ({ filterName }) => {
  return (
    <span className={styles['selected-filters__controller-item']}>
      <span>X</span>
      <span>{filterName}</span>
    </span>
  );
};
