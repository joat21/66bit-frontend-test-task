import { FC } from 'react';
import { Container } from '@UI';
import styles from './Main.module.scss';
import { Link } from 'react-router-dom';

export const Main: FC = () => {
  return (
    <Container className={styles['container']}>
      <h1>Главная</h1>
      <Link to="employees-list">Список сотрудников</Link>
    </Container>
  );
};
