import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';

import { Container, Loader } from '@UI';
import { Overview } from '../Overview';
import { MainInfo } from '../MainInfo';

import { fetchEmployee } from '../../api/fetchEmployee';

import styles from './EmployeeProfile.module.scss';

export const EmployeeProfile: FC = () => {
  const { id = '' } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['employee', id],
    queryFn: () => fetchEmployee({ id }),
    throwOnError: (error) => error instanceof Error,
  });

  if (!data || isLoading || isFetching) return <Loader />;

  return (
    <>
      <Container
        className={classNames(styles['container'], styles['overview-wrapper'])}
      >
        <Overview employee={data} />
      </Container>
      <Container className={styles['container']}>
        <MainInfo employee={data} />
      </Container>
    </>
  );
};
