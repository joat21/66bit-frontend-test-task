import { Employee } from '@entities/model';

interface FetchEmployeesArgs {
  pageParam: number;
  searchParams: URLSearchParams;
}

export const fetchEmployees = async ({
  pageParam,
  searchParams,
}: FetchEmployeesArgs): Promise<Employee[]> => {
  searchParams.set('Page', pageParam.toString());
  searchParams.set('Count', '10');

  const res = await fetch(
    'https://frontend-test-api.stk8s.66bit.ru/api/Employee?' +
      searchParams.toString()
  );
  return res.json();
};
