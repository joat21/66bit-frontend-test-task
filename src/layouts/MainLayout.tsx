import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { Breadcrumbs } from '@components/Breadcrumbs';

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
        <Breadcrumbs />
        <Outlet />
      </main>
    </>
  );
};
