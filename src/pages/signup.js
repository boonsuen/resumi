import React from 'react';

import firebase from '../firebase';
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
import img_shieldlock from '../assets/img/shieldlock.svg';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    inputInvalid: {
      email: false,
      password: false,
      confirmPassword: false
    }
  };
  handleSignup = e => {
    e.preventDefault();
    console.log('submit');
    const { 
      email, 
      password, 
      confirmPassword
    } = this.state;
    if ( password !== confirmPassword ) {
      this.setState(state => ({ 
        inputInvalid: {
          ...state.inputInvalid,
          confirmPassword: true
        }
      }));
      console.log('invalid');
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signed up: ', email, password);
    })
    .catch(error => {
      const { code, message } = error;
      console.log('Signup error: ', code, message);
    });
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };
  onPasswordChange = e => {
    const password = e.target.value;
    this.setState({ password });
  };
  onConfirmPasswordChange = e => {
    const confirmPassword = e.target.value;
    this.setState({ confirmPassword });
  };
  render() {
    const { inputInvalid } = this.state;
    return (
      <Layout>
        <SEO title="Signup" />
        <MainAuthWrapper>
          <ImgWrapper><img src={img_shieldlock} alt="Shield lock" /></ImgWrapper>
          <AuthContainer>
            <h1>Create your free account</h1>
            <form onSubmit={this.handleSignup}>
              <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
              <AuthFormInput 
                type="email" placeholder="you@example.com" 
                spellCheck="false" onChange={this.onEmailChange}
                id="email"
              />
              <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
              <AuthFormInput 
                type="password" placeholder="Minimum 6 characters required" 
                id="password" onChange={this.onPasswordChange}
                invalid={inputInvalid.password}
              />
              <AuthFormLabel htmlFor="confirmPassword">Confirm password</AuthFormLabel>
              <AuthFormInput 
                type="password" placeholder="Enter your password again" 
                id="confirmPassword" onChange={this.onConfirmPasswordChange}
                invalid={inputInvalid.confirmPassword}
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
}

export default SignupPage;