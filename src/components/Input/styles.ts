import styled from 'styled-components';
import {
  TextField,
  InputAdornment
} from '@mui/material';

const BORDER_COLOR = {
  default: '#7B7B7B',
  error: '#BA1A1A',
  focused: '#46416D',
  hover: '#46416D',
}

const LABEL_COLOR = {
  default: '#4D4D4D',
  error: '#BA1A1A',
  focused: '#46416D',
  hover: '#46416D',
}

export const StyledInputAdornment = styled(InputAdornment)`
  svg {
    fill: ${BORDER_COLOR.error};
  }
`;

export const StyledInput = styled(TextField)`

  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${BORDER_COLOR.default};
    border-radius: 4px;
    transition: all 0.3s easy-in-out;
  }

  & .Mui-focused {
    & .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${BORDER_COLOR.focused};
      border-radius: 4px;
      border-width: 1px;
    }
  }

  & .Mui-error {
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${BORDER_COLOR.error};
    }
  }

  & label {
    padding-left: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${LABEL_COLOR.default};

    &.Mui-error {
      color: ${LABEL_COLOR.error};
    }
    &.Mui-focused {
      color: ${LABEL_COLOR.focused};
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