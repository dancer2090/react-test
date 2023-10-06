import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form"
import { CardMedia } from '@mui/material';
import { useLoginMutation } from 'api/auth/auth';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac_dig_twins_2x.png';
import Input from 'components/Input';
import { setUser } from 'slices/user/userSlice';
import { Inputs } from './login.interface';
import { bottomLinks, emailPattern } from './const';
import {
  ActionBox,
  BottomBox,
  ContentBox,
  FormBox,
  Header,
  ImageBox,
  LoginBox,
  Logo,
  StyledBottomLink,
  StyledError,
  StyledFormControl,
  StyledLinkButton,
  StyledSubmitButton,
} from './styles';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>()

  const [login, { isError, data }] = useLoginMutation({ fixedCacheKey: 'auth-token' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { username, password } = data;
    login({ email: username, password });
  }

  useEffect(() => {
    if (isError) {
      setError("root", {
        type: "value",
        message: "The email or password you entered don't match",
      })
    }
  }, [isError, setError]);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      navigate('/');
    }
  }, [data, navigate, dispatch]);

  const displayError = errors?.username || errors?.password || errors?.root;

  return (
    <LoginBox>
      <ContentBox>
        <Logo component="img" alt="Cybellum" image={cybellumSign} />
        <Header variant="h1">
          Welcome to the <br /> Product Security Platform
        </Header>
        <FormBox method="POST" onSubmit={handleSubmit(onSubmit)}>
          <StyledFormControl>
            <Input
              error={!!errors.username}
              registerParams={{
                required: 'Username is required',
                validate: {
                  matchPattern: (v: string) =>
                    emailPattern.test(v) ||
                    "Username must be a valid email address",
                }
              , }}
              register={register}
              id="username"
              name="username" 
              label="Username"
            />
          </StyledFormControl>
          <StyledFormControl>
            <Input
              error={!!errors.password}
              registerParams={{ required: 'Password is required', minLength: { value: 8, message: 'Password should be minimum 8 characters' } }}
              register={register}
              id="password"
              name="password"
              label="Password"
              type="password"
            />
          </StyledFormControl>
          {displayError && (
            <StyledError>
              {displayError?.message}
            </StyledError>
          )}
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
          <StyledBottomLink onClick={() => navigate(el.link)} key={key}>
            {el.title}
          </StyledBottomLink>
        ))}
      </BottomBox>

      <ImageBox>
        <CardMedia component="img" alt="Digital Twins" image={monitor} />
      </ImageBox>
    </LoginBox>
  );
}
