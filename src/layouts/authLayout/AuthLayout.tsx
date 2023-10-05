import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, BgContainer } from './styles';

export default function AuthLayout({ children }: { children?: React.ReactNode }) {
  return (
    <BgContainer>
      <Container>
        {children}
        <Outlet />
      </Container>
    </BgContainer>
  );
}
