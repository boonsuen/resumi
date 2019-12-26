import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const LoginContainer = styled.div`
  width: 636px;
  height: 460px;
`;

const LoginPage = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <LoginContainer>
        <h1>Login to your Resumi account</h1>
        <form>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button>Login</button>
        </form>
      </LoginContainer>
    </Layout>
  );
}

export default LoginPage;