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
  width: 636px;
  height: 460px;
  border-radius: 10px;
  box-shadow: 0 2px 11px rgba(128, 155, 208, 0.5);

  h1 {
    color: #000948;
    font-size: 22px;
  }
`;

const LoginPage = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <MainLoginWrapper>
        <ImgWrapper><img src={img_shieldlock} /></ImgWrapper>
        <LoginContainer>
          <h1>Login to your Resumi account</h1>
          <form>
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <Link to="/">Forgot password?</Link>
            <button type="submit">Login</button>
            <Link to="/signup">Don't have an account?</Link>
          </form>
        </LoginContainer>
      </MainLoginWrapper>
    </Layout>
  );
}

export default LoginPage;