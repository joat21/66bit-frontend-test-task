import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@UI';

import logo from '@assets/66bit-logo.svg';
import styles from './Header.module.scss';
import { ThemeToggle } from '@components/ThemeToggle';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles['header__container']}>
        <Link className={styles['header__logo']} to="/">
          <img src={logo} alt="Логотип 66 Бит" />
        </Link>
        <div className={styles['header__right']}>
          <div className={styles['header__right-contacts']}>
            <a
              className={styles['header__right-contacts-item']}
              href="tel:+73432908476"
            >
              +7 343 290 84 76
            </a>
            <a
              className={styles['header__right-contacts-item']}
              href="mailto:info@66bit.ru"
            >
              info@66bit.ru
            </a>
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
