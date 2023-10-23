import { InputAdornment, TextField } from '@mui/material';
import styled from 'styled-components';

const BORDER_COLOR = {
  default: '#7B7B7B',
  focused: '#46416D',
  hover: '#46416D',
};

const LABEL_COLOR = {
  focused: '#46416D',
};

export const StyledInputAdornment = styled(InputAdornment)`
  svg {
    fill: ${props => props.theme.palette.error.main};;
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
      border-color: ${props => props.theme.palette.error.main};
    }
  }

  & label {
    padding-left: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${props => props.theme.palette.primary.dark};

    &.Mui-focused {
      color: ${LABEL_COLOR.focused};
    }

    &.Mui-error {
      color: ${props => props.theme.palette.error.main};
    }
  }

  & input {
    color: #1c1b1f;
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
