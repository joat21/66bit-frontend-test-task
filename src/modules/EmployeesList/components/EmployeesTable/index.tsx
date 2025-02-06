import { FC } from 'react';
import { Link } from 'react-router-dom';
import { InfiniteData } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Container } from '@UI';
import { Loader } from '../Loader';
import { NoDataPlaceholder } from '../NoDataPlaceholder';
import { Employee } from '@entities/model';
import { formatDate } from 'helpers/formatDate';

import styles from './EmployeesTable.module.scss';

interface EmployeesTableProps {
  data?: InfiniteData<Employee[], unknown>;
  next: () => any;
  hasMore: boolean;
  isLoading: boolean;
}

export const EmployeesTable: FC<EmployeesTableProps> = ({
  data,
  next,
  hasMore,
  isLoading,
}) => {
  if (!data || isLoading) return <Loader />;
  const employees = data.pages.flat();

  return (
    <InfiniteScroll
      style={{ overflowY: 'hidden' }}
      dataLength={employees.length}
      next={next}
      hasMore={hasMore}
      loader={<Loader />}
    >
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
            {employees.length > 0 ? (
              employees.map((employee) => (
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
            ) : (
              <NoDataPlaceholder />
            )}
          </tbody>
        </table>
      </Container>
    </InfiniteScroll>
  );
};
