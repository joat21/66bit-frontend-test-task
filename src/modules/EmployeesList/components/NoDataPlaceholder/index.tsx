import { FC } from 'react';
import styles from './NoDataPlaceholder.module.scss';

export const NoDataPlaceholder: FC = () => {
  return (
    <tr className={styles['no-data-placeholder']}>
      <td colSpan={4}>Нет данных</td>
    </tr>
  );
};
