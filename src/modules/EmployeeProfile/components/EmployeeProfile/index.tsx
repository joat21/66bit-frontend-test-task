import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Container } from '@UI';
import { Overview } from '../Overview';
import { MainInfo } from '../MainInfo';

import { fetchEmployee } from '../../api/fetchEmployee';

import styles from './EmployeeProfile.module.scss';

export const EmployeeProfile: FC = () => {
  const { id = '' } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['employee', id],
    queryFn: () => fetchEmployee({ id }),
  });

  if (!data || isLoading || isFetching) return 'Loading...';

  return (
    <Container className={styles['container']}>
      <Overview employee={data} />
      <MainInfo employee={data} />
    </Container>
  );
};
