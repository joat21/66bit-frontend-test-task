import { Employee } from '@entities/model';

export const fetchEmployees = async ({ pageParam }): Promise<Employee[]> => {
  const res = await fetch(
    'https://frontend-test-api.stk8s.66bit.ru/api/Employee?Page=' + pageParam
  );
  return res.json();
};
