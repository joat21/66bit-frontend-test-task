import React, { ReactNode } from 'react';
import { useMatches } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { Container } from '@UI';
import classNames from 'classnames';

interface Handle {
  crumb: (id?: string) => ReactNode;
}

export const Breadcrumbs = () => {
  const matches = useMatches();

  const crumbs = matches
    .filter((match) => Boolean((match.handle as Handle)?.crumb))
    .map((match) => (match.handle as Handle).crumb(match.params.id ?? ''));

  return (
    <Container>
      <nav className={styles['breadcrumbs']}>
        <ul>
          {crumbs.map((crumb, i) => {
            const isFirst = i === 0;
            const isLast = i === crumbs.length - 1;
            return isLast ? (
              <li key={i} className={styles['last']}>
                {crumb}
              </li>
            ) : (
              <React.Fragment key={i}>
                <li
                  className={classNames({
                    [styles['first']]: isFirst && crumbs.length > 2,
                  })}
                >
                  {crumb}
                </li>
                <svg
                  className={classNames({
                    [styles['first']]: isFirst && crumbs.length > 2,
                  })}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.6259 2.45964C5.01643 2.06912 5.64959 2.06912 6.04011 2.45964L11.3734 7.79297C11.764 8.1835 11.764 8.81666 11.3734 9.20719L6.04011 14.5405C5.64959 14.931 5.01643 14.931 4.6259 14.5405C4.23538 14.15 4.23538 13.5168 4.6259 13.1263L9.25213 8.50008L4.6259 3.87385C4.23538 3.48333 4.23538 2.85017 4.6259 2.45964Z"
                    fill="#B0B0B0"
                  />
                </svg>
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};
