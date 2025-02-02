import { FC } from 'react';
import classNames from 'classnames';
import logo from '@assets/66bit-logo.svg';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles['header__container'])}>
        <a className={styles['header__logo']} href="https://66bit.ru/">
          <img src={logo} alt="Логотип 66 Бит" />
        </a>
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
          <button className={styles['header__right-theme-toggle']}>
            theme toggler
          </button>
        </div>
      </div>
    </header>
  );
};
