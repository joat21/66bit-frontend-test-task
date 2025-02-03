import { FC } from 'react';
import { Employee } from '@entities/model';
import styles from './Overview.module.scss';
import { Stack } from '../Stack';

interface OverviewProps {
  employee: Employee;
}

export const Overview: FC<OverviewProps> = ({ employee }) => {
  return (
    <div className={styles['overview']}>
      <div className={styles['inner']}>
        <img
          src={employee.photo}
          alt={employee.name}
          className={styles['overview__photo']}
        />
        <div className={styles['overview__info']}>
          <h1 className={styles['overview__info-name']}>{employee.name}</h1>
          <span className={styles['overview__info-position']}>
            {employee.position}
          </span>
          <Stack stack={employee.stack} />
        </div>
      </div>
    </div>
  );
};
