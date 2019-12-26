import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const LoginContainer = styled.div`
  width: 636px;
  height: 460px;
`;

const LoginPage = () => {
  return (
    <Layout>
      <LoginContainer>
        <h1>Login to your Resumi account</h1>
        <form>
          <label>Email</label>
          <label>Password</label>
          <button>Login</button>
        </form>
      </LoginContainer>
    </Layout>
  );
}

export default LoginPage;