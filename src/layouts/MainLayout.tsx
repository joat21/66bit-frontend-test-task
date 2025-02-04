import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

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
        <Outlet />
      </main>
    </>
  );
};
