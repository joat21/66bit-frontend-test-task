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
            <th>ФИО</th>
            <th>Должность</th>
            <th>Телефон</th>
            <th>Дата рождения</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <Link to={`${employee.id}`} className={styles['link']}>
                      {employee.name}
                    </Link>
                  </td>
                  <td>{employee.position}</td>
                  <td>{employee.phone}</td>
                  <td>{formatDate(employee.birthdate)}</td>
                </tr>
              ))
            : 'Нет данных'}
        </tbody>
      </table>
    </Container>
  );
};
