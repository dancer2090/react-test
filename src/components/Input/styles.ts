import styled from 'styled-components';
import {
  TextField,
  InputAdornment
} from '@mui/material';

export const StyledInputAdornment = styled(InputAdornment)`
  svg {
    fill: #BA1A1A;
  }
`;

export const StyledInput = styled(TextField)`

  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid var(--cybellum-sys-light-primary, #46416D);
    border-radius: 4px;
  }

  & .Mui-error {
    & .MuiOutlinedInput-notchedOutline {
      border-color: #BA1A1A;
    }
  }

  & label {
    padding-left: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #4D4D4D;

    &.Mui-error {
      color: #BA1A1A;
    }
  }

  & input {
    color: var(--cybellum-sys-light-on-surface, #1C1B1F);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    padding: 4px 16px;
    height: 48px;
    width: 100%;
    border-radius: 4px;
  }
`;