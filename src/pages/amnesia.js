import React from 'react';
import styled from 'styled-components';

import Layout from './components/Layout';
import SEO from '../components/seo';
import { 
  MainAuthWrapper,
  ImgWrapper,
  AuthContainer,
  AuthFormLabel,
  AuthFormInput,
  AuthFormActions,
  AuthFormButton,
  ReverseAuthLink
} from './login';
import img_mail from '../assets/img/mail.svg';

const AmnesiaContainer = styled(AuthContainer)`
  width: 583px;

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
    <SEO title="Forgot password" />
    <MainAuthWrapper>
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
          <SubmitButton text="Send reset email" loading={false} />
          <ReverseAuthLink to="/login">Back to login</ReverseAuthLink>
        </AuthFormActions>
      </form>
    </AmnesiaContainer>
    <ImgWrapper><img src={img_mail} alt="Mail illustration" /></ImgWrapper>
    </MainAuthWrapper>
  </Layout>
);

export default Amnesia;