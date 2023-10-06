import { Box, Button, CardMedia, FormControl, Typography } from '@mui/material';
import styled from 'styled-components';

export const Logo = styled(CardMedia)`
  width: 150.192px;
  height: 55px;
  object-fit: inherit;
`;

export const LoginBox = styled(Box)`
  width: 100%;
  padding-top: 193px;
  padding-left: 182px;
  padding-right: 182px;
  padding-bottom: 40px;
  position: relative;
  overflow-x: hidden;
  z-index: 1;
  background: ${props => props.theme.palette.background.default};
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1450px) {
    padding-left: 160px;
    padding-right: 160px;
  }
  @media (max-width: 1350px) {
    padding-left: 140px;
    padding-right: 140px;
  }
  @media (max-width: 1250px) {
    padding-left: 120px;
    padding-right: 120px;
  }
  @media (max-width: 992px) {
    padding-top: 100px;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 580px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
  }
  @media (max-width: 450px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const ContentBox = styled(Box)`
  width: 100%;
  max-width: 636px;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const FormBox = styled.form`
  padding-top: 8px;
  width: 100%;
  max-width: 400px;
`;

export const Header = styled(Typography)`
  padding-top: 32px;
  color: ${props => props.theme.palette.primary.main};
  font-size: 56px;
  font-style: normal;
  font-weight: 300;
  line-height: 64px;
  letter-spacing: -0.5px;

  @media (max-width: 1350px) {
    font-size: 42px;
  }
  @media (max-width: 1200px) {
    font-size: 36px;
    line-height: 56px;
  }
  @media (max-width: 580px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const StyledLinkButton = styled(Button)`
  padding: 2px 4px;
  color: ${props => props.theme.palette.primary.dark};;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  background: transparent;
  &:hover {
    border-radius: 4px;
    background: rgba(77, 77, 77, 0.08);
  }
`;

export const StyledSubmitButton = styled(Button)`
  position: relative;
  width: 100%;
  color: #2a2118;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  border-radius: 4px;
  background: #baa182;
  transition: all 0.3s easy-in-out;
  box-shadow: none;
  height: 40px;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(132, 110, 84, 0);

    &:hover {
      background: rgba(132, 110, 84, 0.08);
    }
  }

  &:hover {
    background: #baa182;
    box-shadow: 0px 1px 3px 1px rgba(28, 27, 31, 0.15), 0px 1px 2px 0px rgba(28, 27, 31, 0.3);
  }
`;

export const ActionBox = styled.div`
  padding-top: 48px;
`;

export const BottomBox = styled.div`
  width: 100%;
  padding-top: 288px;
  display: flex;
  justify-content: flex-start;
  margin-left: -16px;

  @media (max-width: 1440px) {
    padding-top: 200px;
  }
  @media (max-width: 1200px) {
    padding-top: 180px;
  }
  @media (max-width: 992px) {
    padding-top: 100px;
  }
`;

export const StyledBottomLink = styled(Button)`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  margin: 0 16px;

  color: ${props => props.theme.palette.primary.dark};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;

  &:hover {
    border-radius: 4px;
    background: rgba(77, 77, 77, 0.08);
  }

  @media (max-width: 992px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 500px) {
    margin: 0 8px;
  }

  @media (max-width: 450px) {
    margin: 0 4px;
  }
  @media (max-width: 400px) {
    margin: 0;
  }
`;

export const ImageBox = styled.div`
  position: absolute;
  top: 71px;
  left: 699px;
  z-index: 0;

  @media (max-width: 1450px) {
    top: 141px;
  }
  @media (max-width: 1350px) {
    left: 500px;
  }
  @media (max-width: 1200px) {
    left: 450px;
  }
  @media (max-width: 992px) {
    display: none;
  }

  img {
    width: 1237px;

    @media (max-width: 1750px) {
      width: 1200px;
    }
    @media (max-width: 1700px) {
      width: 1100px;
    }
    @media (max-width: 1650px) {
      width: 1000px;
    }
    @media (max-width: 1550px) {
      width: 900px;
    }
    @media (max-width: 1450px) {
      width: 800px;
    }
  }
`;

export const StyledError = styled.p`
  margin: 0;
  padding-top: 4px;
  color: ${props => props.theme.palette.error.main};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding-bottom: 12px;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  padding-top: 28px;
`;
