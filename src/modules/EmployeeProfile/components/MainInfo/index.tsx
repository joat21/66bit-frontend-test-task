import { FC } from 'react';
import { Employee } from '@entities/model';
import styles from './MainInfo.module.scss';

interface MainInfoProps {
  employee: Employee;
}

export const MainInfo: FC<MainInfoProps> = ({ employee }) => {
  return (
    <div className={styles['main-info']}>
      <h2>Основная информация</h2>
      <dl>
        <dt>Контактный телефон</dt>
        <dd>{employee.phone}</dd>

        <dt>Дата рождения</dt>
        <dd>{employee.birthdate}</dd>

        <dt>Дата устройства</dt>
        <dd>{employee.dateOfEmployment}</dd>
      </dl>
    </div>
  );
};
