import { FC, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Container } from '@UI';
import { Top } from '../Top';
import { SelectedFilters } from '../SelectedFilters';
import { EmployeesTable } from '../EmployeesTable';

import { FetchEmployeesUrlParams } from '../../types';
import { fetchEmployees } from '../../api/fetchEmployees';

import styles from './EmployeesList.module.scss';

export const EmployeesList: FC = () => {
  const [urlParams, setUrlParams] = useState<FetchEmployeesUrlParams>({});
  const [filters, setFilters] = useState<FetchEmployeesUrlParams>({});

  const {
    data,
    // error,
    fetchNextPage,
    hasNextPage,
    // isFetching,
    isFetchingNextPage,
    isLoading,
    // status,
  } = useInfiniteQuery({
    queryKey: ['employee', urlParams],
    queryFn: ({ pageParam }) => fetchEmployees({ pageParam, urlParams }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length >= 10 ? pages.length + 1 : undefined,
    staleTime: 1000 * 60 * 5,
  });

  if (!data || isLoading) return 'Loading...';
  const employees = data.pages.flat();

  return (
    <>
      <Top filters={filters} setFilters={setFilters} />
      <SelectedFilters
        filters={filters}
        setFilters={setFilters}
        setUrlParams={setUrlParams}
      />
      <Container className={styles['employees-list']} as="section">
        <InfiniteScroll
          dataLength={employees.length}
          next={() => !isFetchingNextPage && fetchNextPage()}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          <EmployeesTable data={employees} />
        </InfiniteScroll>
      </Container>
    </>
  );
};
