import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  return (
    <div className={styles['wrapper']}>
      <span className={styles['code-404']}>404</span>
      <span className={styles['text']}>Страница не найдена</span>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
