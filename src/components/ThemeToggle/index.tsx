import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle: FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isPressed, setIsPresses] = useState(theme === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsPresses(!isPressed);
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      className={styles['theme-toggle']}
      onClick={toggleTheme}
      aria-pressed={isPressed}
    >
      <span className={styles['thumb']}>
        <svg
          aria-hidden
          className={classNames(styles['icon'], styles['icon-moon'], {
            [styles['visible']]: !isPressed,
          })}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.491578 8.44493C0.559725 8.37665 0.645179 8.32821 0.738771 8.30481C0.832365 8.28141 0.930564 8.28394 1.02283 8.31212C2.03581 8.61836 3.11289 8.64404 4.13932 8.38642C5.16574 8.1288 6.10304 7.59753 6.85134 6.84923C7.59964 6.10093 8.13091 5.16363 8.38853 4.1372C8.64615 3.11078 8.62047 2.0337 8.31423 1.02072C8.28581 0.928413 8.28309 0.830108 8.30636 0.736374C8.32963 0.642639 8.37802 0.557022 8.44631 0.488729C8.5146 0.420437 8.60022 0.372053 8.69395 0.348782C8.78769 0.325511 8.88599 0.328233 8.9783 0.356654C10.3788 0.785668 11.6083 1.64546 12.4919 2.81369C13.2645 3.83957 13.7359 5.06059 13.8529 6.33957C13.9699 7.61856 13.7279 8.90483 13.1542 10.0539C12.5804 11.2029 11.6977 12.1692 10.605 12.8442C9.51239 13.5192 8.25317 13.8762 6.96884 13.875C5.47049 13.8796 4.012 13.3925 2.81712 12.4884C1.6489 11.6049 0.789107 10.3753 0.360093 8.97486C0.332001 8.8829 0.329393 8.78504 0.35255 8.69171C0.375706 8.59839 0.423757 8.5131 0.491578 8.44493ZM3.45595 11.6397C4.58118 12.4873 5.97468 12.8998 7.37993 12.8014C8.78518 12.703 10.1076 12.1003 11.1037 11.1042C12.0999 10.1082 12.7027 8.78582 12.8012 7.38057C12.8997 5.97533 12.4873 4.58179 11.6399 3.4565C11.0878 2.7274 10.374 2.13637 9.5547 1.72994C9.60137 2.05747 9.6249 2.38788 9.62509 2.71872C9.62316 4.54978 8.89492 6.30529 7.60016 7.60004C6.30541 8.8948 4.5499 9.62304 2.71884 9.62498C2.38734 9.62487 2.05625 9.60135 1.72806 9.55458C2.13488 10.374 2.72637 11.0878 3.45595 11.6397Z"
            fill="currentColor"
          />
        </svg>

        <svg
          aria-hidden
          className={classNames(styles['icon'], styles['icon-sun'], {
            [styles['visible']]: isPressed,
          })}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99992 10.7916C9.094 10.7916 10.7916 9.09406 10.7916 6.99998C10.7916 4.9059 9.094 3.20831 6.99992 3.20831C4.90584 3.20831 3.20825 4.9059 3.20825 6.99998C3.20825 9.09406 4.90584 10.7916 6.99992 10.7916Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1651 11.165L11.0892 11.0892M11.0892 2.91085L11.1651 2.83502L11.0892 2.91085ZM2.83508 11.165L2.91091 11.0892L2.83508 11.165ZM7.00008 1.21335V1.16669V1.21335ZM7.00008 12.8334V12.7867V12.8334ZM1.21341 7.00002H1.16675H1.21341ZM12.8334 7.00002H12.7867H12.8334ZM2.91091 2.91085L2.83508 2.83502L2.91091 2.91085Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
    // </label>
  );
};
