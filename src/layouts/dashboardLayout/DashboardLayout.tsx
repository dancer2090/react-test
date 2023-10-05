import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Container } from './styles';
import { useSelector } from "react-redux";
import { RootState } from 'app/store'
import Notification from './Notification';

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
        ) : <Navigate to="/login" />
      }
    </Container>
  );
}
