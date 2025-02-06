import { FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '@components/Header';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryFallback } from '@components/ErrorBoundaryFallback';

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <Breadcrumbs />
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <Outlet />
        </ErrorBoundary>
        <ScrollRestoration />
      </main>
    </>
  );
};
