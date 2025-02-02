import { FC } from 'react';
import { Top } from '../Top';
import { SelectedFilters } from '../SelectedFilters';
import { EmplyeesTable } from '../EmplyeesTable';

export const EmployeesList: FC = () => {
  return (
    <>
      <Top />
      <SelectedFilters />
      <EmplyeesTable />
    </>
  );
};
