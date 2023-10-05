
type ICheck = (value: string, reg?: string) => boolean;
interface IValidate {
  reg?: string
  check: ICheck
  message: string
}

const usernameChecks: IValidate[] = [
  {
    reg: '', 
    check: (value, reg) => value === reg,
    message: 'Username cannot be empty'
  },
  {
    reg: ' ', 
    check: (value, reg) => value === reg,
    message: 'Username cannot be empty'
  },
];

const passwordChecks: IValidate[] = [
  {
    reg: '', 
    check: (value, reg) => value === reg,
    message: 'Password cannot be empty'
  },
  {
    reg: ' ', 
    check: (value, reg) => value === reg,
    message: 'Password cannot be empty'
  },
  {
    check: (value, reg) => {
      console.log(value, value.length, value.length < 8);
      return value.length < 8;
    },
    message: 'Password should be minimum 8 characters'
  }
];

export const validateUsername = (value: string): string[] => usernameChecks.filter(v => v.check(value, v.reg)).map(v => v.message)

export const validatePassword = (value: string): string[] => passwordChecks.filter(v => v.check(value, v.reg)).map(v => v.message)
