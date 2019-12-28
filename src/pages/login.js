import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import img_shieldlock from '../assets/img/shieldlock.svg';

const MainLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const LoginContainer = styled.div`
  width: 600px;
  padding: 55px 75px;
  border-radius: 10px;
  box-shadow: 0 2px 11px rgba(128, 155, 208, 0.5);

  h1 {
    color: #000948;
    font-size: 22px;
  }
`;

const AuthFormInput = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  padding-left: 15px;
  border: 1px solid #e0e5e9;
  border-radius: 5px;
  font-size: 16px;
  transition: all .3s;

  &:focus {
    border-color: #0555FF;
    outline: none;
  }
`;

const AuthFormButton = styled.button`
  width: 112px;
  height: 50px;
  border-radius: 5px;
  background: #4353ff;
  color: #fff;
  font-size: 18px;
`;

const LoginPage = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <MainLoginWrapper>
        <ImgWrapper><img src={img_shieldlock} alt="Shield lock" /></ImgWrapper>
        <LoginContainer>
          <h1>Login to your Resumi account</h1>
          <form>
            <label htmlFor="email">Email</label>
            <AuthFormInput 
              type="email" placeholder="you@example.com" 
              spellCheck="false" id="email"
            />
            <label htmlFor="password">Password</label>
            <AuthFormInput 
              type="password" placeholder="Enter your password" 
              id="password"
            />
            <Link to="/">Forgot password?</Link>
            <AuthFormButton type="submit">Login</AuthFormButton>
            <Link to="/signup">Don't have an account?</Link>
          </form>
        </LoginContainer>
      </MainLoginWrapper>
    </Layout>
  );
}

export default LoginPage;