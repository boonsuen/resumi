import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import { 
  AuthContainer,
  AuthFormLabel,
  AuthFormInput,
  AuthFormActions,
  AuthFormButton,
  ReverseAuthLink
} from './login';

const AmnesiaContainer = styled(AuthContainer)`
  width: 583px;
  margin: 100px 0;

  h2 {
    color: #5d6a76;
    font-size: 16px;
    font-weight: 400;
  }
`;

const SubmitButton = styled(AuthFormButton)`
  width: 200px;
`;


const Amnesia = () => (
  <Layout>
    <AmnesiaContainer>
      <h1>Forgot your password?</h1>
      <h2>Enter your email address and you’ll receive a link to reset your password.</h2>
      <form>
        <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
        <AuthFormInput 
          type="email" placeholder="you@example.com" 
          spellCheck="false" id="email"
        />
        <AuthFormActions>
          <SubmitButton type="submit">Send reset email</SubmitButton>
          <ReverseAuthLink to="/login">Back to login</ReverseAuthLink>
        </AuthFormActions>
      </form>
    </AmnesiaContainer>
  </Layout>
);

export default Amnesia;