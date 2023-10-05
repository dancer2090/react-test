import { CardMedia } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac_dig_twins_2x.png';
import Input from 'components/Input';
import { validatePassword, validateUsername } from 'helpers/validators'
import {
  Logo,
  LoginBox,
  FormBox,
  Header,
  ContentBox,
  ActionBox,
  BottomBox,
  ImageBox,
  StyledLinkButton,
  StyledBottomLink,
  StyledSubmitButton,
  StyledError,
  StyledFormControl,
} from './styles';
import { setUser } from 'slices/user/userSlice';
import { useEffect, useState } from 'react';
import { useLoginMutation } from 'api/auth/auth';

const bottomLinks = [
  {
    title: 'Privacy policy',
    link: '/privacy-policy'
  }, 
  {
    title: 'Terms of use',
    link: '/terms-of-use'
  }, 
  {
    title: 'Contact us',
    link: '/contact-us'
  }, 
];

export default function Login() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const [login, { isError, data }] = useLoginMutation({ fixedCacheKey: 'auth-token' });
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validations
    const passwordErrors: string[] = validatePassword(password);
    const usernameErrors: string[] = validateUsername(username);

    const err = [...passwordErrors, ...usernameErrors];

    // set Error
    if (err.length > 0) {
      setErrors([...err])
      return;
    }
    else setErrors([]);
  
    // do login request
    login({ email: username, password });
  }

  useEffect(() => {
    if (isError) setErrors([`The email or password you entered don’t match`])
  }, [isError])

  useEffect(() => {
    if (data) {
      dispatch(setUser(data))
      navigate('/');
    }
  }, [data, navigate, dispatch]);

  return (
    <LoginBox>
      <ContentBox>
        <Logo component="img" alt="Cybellum" image={cybellumSign} />
        <Header variant="h1">
          Welcome to the <br /> Product Security Platform
        </Header>
        <FormBox method="POST" onSubmit={handleSubmit}>
          <StyledFormControl>
            <Input
              error={errors.length > 0}
              label="Username"
              value={username}
              handleChange={(e) => setUsername(e.currentTarget.value)}
            />
          </StyledFormControl>
          <StyledFormControl>
          <Input
              error={errors.length > 0}
              label="Password"
              value={password}
              type="password" 
              handleChange={(e) => setPassword(e.currentTarget.value)}
            />
          </StyledFormControl>
          {errors.length > 0 && <StyledError>{errors[0]}</StyledError>}
          <StyledLinkButton onClick={() => navigate('/forgot-password')}>Forgot your password?</StyledLinkButton>
          <ActionBox>
            <StyledSubmitButton variant="contained" type="submit">
              Log in
            </StyledSubmitButton>
          </ActionBox>
        </FormBox>
      </ContentBox>

      <BottomBox>
        {bottomLinks.map((el, key) => (
          <StyledBottomLink onClick={() => navigate(el.link)} key={key}>{el.title}</StyledBottomLink>
        ))}
      </BottomBox>

      <ImageBox>
        <CardMedia component="img" alt="Digital Twins" image={monitor} />
      </ImageBox>
    </LoginBox>
  );
}
