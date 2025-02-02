import { FC } from 'react';
import styles from './EmplyeesTable.module.scss';

const employees = [
  {
    id: 1,
    fullName: 'Дмитриев Игорь Степанович',
    position: 'Дизайнер',
    phone: '+7 934 349-43-23',
    birthday: '23.09.2000',
  },
  {
    id: 2,
    fullName: 'Чечихин Дмитрий Андреевич',
    position: 'Frontend-разработчик',
    phone: '+7 934 349-43-23',
    birthday: '01.08.1999',
  },
];

export const EmplyeesTable: FC = () => {
  return (
    <section className={styles['section']}>
      <table>
        <thead>
          <tr>
            <th style={{ width: '46%', paddingLeft: '1.2rem' }}>ФИО</th>
            <th style={{ width: '25%' }}>Должность</th>
            <th style={{ width: '18%' }}>Телефон</th>
            <th style={{ width: 'auto', paddingRight: '1.2rem' }}>
              Дата рождения
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td style={{ paddingLeft: '1.2rem' }}>{employee.fullName}</td>
              <td>{employee.position}</td>
              <td>{employee.phone}</td>
              <td style={{ paddingRight: '1.2rem' }}>{employee.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
