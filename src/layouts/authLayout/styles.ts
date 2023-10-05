import { Box } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
  background: var(--cybellum-sys-light-background, #f9f9fa);
  width: 100%;
`;

export const BgContainer = styled(Box)`
  background: var(--cybellum-sys-light-background, #f9f9fa);
  width: 100%;
  height: 100vh;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;
