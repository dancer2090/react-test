import { RootState } from 'app/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Notification from './Notification';
import { Container } from './styles';

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const { accessToken } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      {accessToken ? (
        <>
          {children}
          <Notification />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </Container>
  );
}
