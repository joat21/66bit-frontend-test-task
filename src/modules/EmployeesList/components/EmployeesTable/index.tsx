import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@UI';
import { Employee } from '@entities/model';
import { formatDate } from 'helpers/formatDate';

import styles from './EmployeesTable.module.scss';

interface EmployeesTableProps {
  data: Employee[];
}

export const EmployeesTable: FC<EmployeesTableProps> = ({ data }) => {
  return (
    <Container className={styles['table-wrapper']}>
      <table>
        <thead>
          <tr>
            <th style={{ width: '46%', paddingLeft: '1.2rem' }}>ФИО</th>
            <th style={{ width: '25%' }}>Должность</th>
            <th style={{ width: '17%' }}>Телефон</th>
            <th style={{ width: 'auto', paddingRight: '1.2rem' }}>
              Дата рождения
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td style={{ paddingLeft: '1.2rem' }}>
                <Link to={`${employee.id}`} className={styles['link']}>
                  {employee.name}
                </Link>
              </td>
              <td>{employee.position}</td>
              <td>{employee.phone}</td>
              <td style={{ paddingRight: '1.2rem' }}>
                {formatDate(employee.birthdate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
