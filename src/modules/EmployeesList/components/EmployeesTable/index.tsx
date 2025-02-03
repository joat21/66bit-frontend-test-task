import { FC } from 'react';
import { Employee } from '@entities/model';
import styles from './EmployeesTable.module.scss';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchEmployees } from '../api/fetchEmployees';

interface EmployeesTableProps {
  data: Employee[];
}

export const EmployeesTable: FC = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    status,
  } = useInfiniteQuery({
    queryKey: ['employee'],
    queryFn: fetchEmployees,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length >= 10 ? pages.length + 1 : undefined,
  });

  if (!data || isLoading) return 'Loading...';
  const employees = data.pages.flat();

  return (
    <section className={styles['section']}>
      <InfiniteScroll
        dataLength={employees.length}
        next={() => !isFetchingNextPage && fetchNextPage()}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
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
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td style={{ paddingLeft: '1.2rem' }}>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.phone}</td>
                <td style={{ paddingRight: '1.2rem' }}>{employee.birthdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </section>
  );
};
