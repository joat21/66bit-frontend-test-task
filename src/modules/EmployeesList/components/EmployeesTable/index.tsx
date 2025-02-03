import { FC } from 'react';
import { Employee } from '@entities/model';
import styles from './EmployeesTable.module.scss';

interface EmployeesTableProps {
  data: Employee[];
}

export const EmployeesTable: FC<EmployeesTableProps> = ({ data }) => {
  return (
    <section className={styles['section']}>
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
          {data.map((employee, i) => (
            <tr key={employee.id}>
              <td style={{ paddingLeft: '1.2rem' }}>
                {employee.name} {i + 1}
              </td>
              <td>{employee.position}</td>
              <td>{employee.phone}</td>
              <td style={{ paddingRight: '1.2rem' }}>{employee.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
