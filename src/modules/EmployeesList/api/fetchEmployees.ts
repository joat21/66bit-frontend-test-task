import { Employee } from '@entities/model';
import { FetchEmployeesUrlParams } from '@modules/EmployeesList/types';
import { capitalize } from 'helpers/capitalize';

interface FetchEmployeesArgs {
  pageParam: number;
  queryKey: (string | FetchEmployeesUrlParams)[];
}

export const fetchEmployees = async ({
  pageParam,
  queryKey,
}: FetchEmployeesArgs): Promise<Employee[]> => {
  const [, urlParams] = queryKey;
  const params = new URLSearchParams({
    Page: pageParam.toString(),
    Count: '10',
  });

  Object.entries(urlParams).map(([key, value]) => {
    if (Array.isArray(value)) {
      value.map((item) => params.append(capitalize(key), item));
    } else if (value) {
      params.append(capitalize(key), value);
    }
  });

  const res = await fetch(
    'https://frontend-test-api.stk8s.66bit.ru/api/Employee?' + params.toString()
  );
  return res.json();
};
