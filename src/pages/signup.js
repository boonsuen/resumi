import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Loading = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  border: 2px solid rgba(255,255,255,0.8);
  border-left-color: #7a97ff;
  border-top-color: #7a97ff;
  ${'' /* #4f6cff */}
  ${'' /* #7a97ff */}
  border-radius: 50%;
  animation: ${rotate} 340ms infinite linear;
`;

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    inputInvalid: {
      email: false,
      password: false,
      confirmPassword: false
    },
    loading: false
  };
  handleSignup = e => {
    e.preventDefault();
    const { 
      email, 
      password, 
      confirmPassword
    } = this.state;
    if (!email.trim()) {
      this.setState(state => ({ 
        inputInvalid: {
          ...state.inputInvalid,
          email: true
        }
      }));
    }
    if (password !== confirmPassword) {
      if (password.length < 6) {
        this.setState(state => ({ 
          inputInvalid: {
            ...state.inputInvalid,
            password: true,
            confirmPassword: true
          }
        }));
        // password not match and length short
        return;
      } else {
        this.setState(state => ({ 
          inputInvalid: {
            ...state.inputInvalid,
            confirmPassword: true
          }
        }));
        // password not match but length ok
        return;
      }
    } else if (password.length < 6) {
      this.setState(state => ({ 
        inputInvalid: {
          ...state.inputInvalid,
          password: true
        }
      }));
      // password match but length short
      return;
    }
    // password match and length ok
    this.setState({
      loading: true
    }, () => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Signed up: ', email, password);
        console.log(firebase.auth().currentUser);
      })
      .catch(error => {
        const { code, message } = error;
        if (code === 'auth/email-already-in-use' || code === 'auth/invalid-email') {
          console.log(message);
          this.setState(state => ({ 
            inputInvalid: {
            ...state.inputInvalid,
            email: true 
            },
            loading: false
          }));
        }
      });
    });
  };
  onInputChange = e => {
    e.persist();
    const { value, name } = e.target;
    this.setState(state => ({
      [name]: value,
      inputInvalid: {
        ...state.inputInvalid,
        [name]: false
      }
    }));
  };
  render() {
    const { inputInvalid, loading } = this.state;
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
                spellCheck="false" id="email" name="email"
                onChange={this.onInputChange} invalid={inputInvalid.email}
              />
              <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
              <AuthFormInput 
                type="password" placeholder="Minimum 6 characters required" 
                id="password" name="password" 
                onChange={this.onInputChange} invalid={inputInvalid.password}
              />
              <AuthFormLabel htmlFor="confirmPassword">Confirm password</AuthFormLabel>
              <AuthFormInput 
                type="password" placeholder="Enter your password again" 
                id="confirmPassword" name="confirmPassword" 
                onChange={this.onInputChange} invalid={inputInvalid.confirmPassword}
              />
              <AuthFormActions>
                <AuthFormButton type="submit" loading={loading ? 1 : 0}>
                  {!loading ? "Sign Up" : <Loading />}
                </AuthFormButton>
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