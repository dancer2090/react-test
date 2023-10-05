import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  StyledInput,
  StyledInputAdornment
} from './styles';

enum FieldTypes {
  text = 'text',
  password = 'password'
}

interface IInput {
  error: boolean,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  label?: string
  value?: string
  defaultValue?: string
  type?: keyof typeof FieldTypes,
}

const Input: React.FC<IInput> = ({
  error = false,
  handleChange = () => {},
  label,
  value,
  defaultValue,
  type = 'text',
}) => (
  <StyledInput
    error={error}
    label={label || null}
    value={value || null}
    defaultValue={defaultValue || null}
    type={type}
    onChange={handleChange}
    InputProps={{
      endAdornment: (
        <StyledInputAdornment position="end">
          {error &&  <ErrorOutlineIcon />}
        </StyledInputAdornment>
      )
    }}
  />
)

export default Input;