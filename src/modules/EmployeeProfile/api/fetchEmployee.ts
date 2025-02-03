import { Employee } from '@entities/model';

export const fetchEmployee = async ({
  id,
}: {
  id: string;
}): Promise<Employee> => {
  const res = await fetch(
    'https://frontend-test-api.stk8s.66bit.ru/api/Employee/' + id
  );
  return res.json();
};
