import React from 'react';
import { Outlet } from 'react-router-dom';
import { BgContainer, Container } from './styles';

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
