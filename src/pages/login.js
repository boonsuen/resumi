import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from './components/Layout';
import SEO from '../components/seo';
import img_shieldlock from '../assets/img/shieldlock.svg';

export const MainAuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const AuthContainer = styled.div`
  width: 600px;
  padding: 55px 75px;
  border-radius: 10px;
  box-shadow: 0 2px 11px -2px rgba(128, 155, 208, .5);

  h1 {
    color: #000948;
    font-size: 22px;
  }

  form {
    margin: 0;
  }
`;

export const AuthFormLabel = styled.label`
  display: block;
  color: #000948;
  padding-bottom: 9px;
`;

export const AuthFormInput = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  padding-left: 15px;
  margin-bottom: 24px;
  border: 1px solid ${props => props.invalid ? '#fc354a' : '#e0e5e9'};
  border-radius: 5px;
  color: #26282D;
  font-size: 16px;
  transition: all .3s;
  overflow: auto;

  &:focus {
    border-color: #0555FF;
    outline: none;
  }

  &::placeholder {
    color: #c4c4c3;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    border: 1px solid ${props => props.invalid ? '#fc354a' : '#e0e5e9'};
    -webkit-text-fill-color: #26282D;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const DivSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgotPassword = styled(Link)`
  color: #6B707B;
  font-size: 16px;
  margin-bottom: 7px;
`;

export const AuthFormActions = styled(DivSpaceBetween)`
  margin-top: 35px;
`;

export const AuthFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 50px;
  border-radius: 5px;
  background: ${props => props.loading ? "#5465ff" : "#4353ff"};
  color: #fff;
  font-size: 18px;
  transition: background 0.3s;
`;

export const ReverseAuthLink = styled(Link)`
  color: #26282D;
  font-size: 16px;
`;

const LoginPage = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <MainAuthWrapper>
        <ImgWrapper><img src={img_shieldlock} alt="Shield lock" /></ImgWrapper>
        <AuthContainer>
          <h1>Login to your Resumi account</h1>
          <form>
            <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
            <AuthFormInput 
              type="email" placeholder="you@example.com" 
              spellCheck="false" id="email"
            />
            <DivSpaceBetween>
              <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
              <ForgotPassword to="/amnesia">Forgot password?</ForgotPassword>
            </DivSpaceBetween>
            <AuthFormInput 
              type="password" placeholder="Enter your password" 
              id="password"
            />
            <AuthFormActions>
              <AuthFormButton type="submit">Log In</AuthFormButton>
              <ReverseAuthLink to="/signup">Don't have an account?</ReverseAuthLink>
            </AuthFormActions>
          </form>
        </AuthContainer>
      </MainAuthWrapper>
    </Layout>
  );
}

export default LoginPage;