import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Container } from '@UI';
import { Top } from '../Top';
import { SelectedFilters } from '../SelectedFilters';
import { EmployeesTable } from '../EmployeesTable';

import { FetchEmployeesUrlParams } from '../../types';
import { fetchEmployees } from '../../api/fetchEmployees';

import styles from './EmployeesList.module.scss';

export const EmployeesList: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FetchEmployeesUrlParams>(() => {
    return {
      name: searchParams.get('Name') ?? undefined,
      position: searchParams.getAll('Position'),
      gender: searchParams.getAll('Gender'),
      stack: searchParams.getAll('Stack'),
    };
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['employee', window.location.search],
      queryFn: ({ pageParam }) =>
        fetchEmployees({
          pageParam,
          searchParams,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) =>
        lastPage.length >= 10 ? pages.length + 1 : undefined,
      staleTime: 1000 * 60 * 5,
      throwOnError: true,
    });

  return (
    <>
      <Top filters={filters} setFilters={setFilters} />
      <SelectedFilters
        filters={filters}
        setFilters={setFilters}
        setSearchParams={setSearchParams}
      />
      <Container className={styles['employees-list']} as="section">
        <EmployeesTable
          data={data}
          next={() => !isFetchingNextPage && fetchNextPage()}
          hasMore={hasNextPage}
          isLoading={isLoading}
        />
      </Container>
    </>
  );
};
