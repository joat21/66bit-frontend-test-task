import { FC, UIEvent, useEffect, useRef, useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchEmployees } from '../api/fetchEmployees';

import { Top } from '../Top';
import { SelectedFilters } from '../SelectedFilters';
import InfiniteScroll from 'react-infinite-scroll-component';
import { EmployeesTable } from '../EmployeesTable';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';

export const EmployeesList: FC = () => {
  const [urlParams, setUrlParams] = useState<FetchEmployeesUrlParams>({});
  const [filters, setFilters] = useState<FetchEmployeesUrlParams>({});

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
    queryKey: ['employee', urlParams],
    queryFn: fetchEmployees,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length >= 10 ? pages.length + 1 : undefined,
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
      <InfiniteScroll
        dataLength={employees.length}
        next={() => !isFetchingNextPage && fetchNextPage()}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        <EmployeesTable data={employees} />
      </InfiniteScroll>
    </>
  );
};
