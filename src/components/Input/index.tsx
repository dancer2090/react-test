import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { StyledInput, StyledInputAdornment } from './styles';

enum FieldTypes {
  text = 'text',
  password = 'password',
}

interface IInput {
  id: string;
  error?: boolean;
  label?: string;
  defaultValue?: string;
  type?: keyof typeof FieldTypes;
  register?: any;
  registerParams: object;
  name: string;  
}

const Input: React.FC<IInput> = ({
  id,
  error = false,
  label,
  type = 'text',
  register,
  registerParams = {},
  name,
}) => (
  <StyledInput
    {...register(name, { ...registerParams })}
    id={id}
    name={name}
    error={error}
    label={label || null}
    type={type}
    InputProps={{
      endAdornment: <StyledInputAdornment position="end">{error && <ErrorOutlineIcon />}</StyledInputAdornment>,
    }}
  />
);

export default Input;
