import React from 'react';

import Layout from '../components/Layout';
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
import img_shieldlock from '../assets/img/shieldlock.svg';

const SignupPage = () => {
  return (
    <Layout>
      <SEO title="Signup" />
      <MainAuthWrapper>
        <ImgWrapper><img src={img_shieldlock} alt="Shield lock" /></ImgWrapper>
        <AuthContainer>
          <h1>Create your free account</h1>
          <form>
            <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
            <AuthFormInput 
              type="email" placeholder="you@example.com" 
              spellCheck="false" id="email"
            />
            <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
            <AuthFormInput 
              type="password" placeholder="Minimum 6 characters required" 
              id="password"
            />
            <AuthFormLabel htmlFor="confirmPassword">Confirm password</AuthFormLabel>
            <AuthFormInput 
              type="password" placeholder="Enter your password again" 
              id="confirmPassword"
            />
            <AuthFormActions>
              <AuthFormButton type="submit">Sign Up</AuthFormButton>
              <ReverseAuthLink to="/login">Already have an account?</ReverseAuthLink>
            </AuthFormActions>
          </form>
        </AuthContainer>
      </MainAuthWrapper>
    </Layout>
  );
}

export default SignupPage;