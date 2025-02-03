import { FC, UIEvent, useEffect, useRef } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchEmployees } from '../api/fetchEmployees';

import { Top } from '../Top';
import { SelectedFilters } from '../SelectedFilters';
import InfiniteScroll from 'react-infinite-scroll-component';
import { EmployeesTable } from '../EmployeesTable';

export const EmployeesList: FC = () => {
  console.log('rerender list');
  return (
    <>
      <Top />
      <SelectedFilters />
      <EmployeesTable />
    </>
  );
};
