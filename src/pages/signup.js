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
    const { 
      email, 
      password, 
      confirmPassword
    } = this.state;
    if (password !== confirmPassword) {
      if (password.length < 6) {
        this.setState(state => ({ 
          inputInvalid: {
            ...state.inputInvalid,
            password: true,
            confirmPassword: true
          }
        }));
        console.log('password not match and length short');
        return;
      } else {
        this.setState(state => ({ 
          inputInvalid: {
            ...state.inputInvalid,
            confirmPassword: true
          }
        }));
        console.log('password not match but length ok');
        return;
      }
    } else if (password.length < 6) {
      this.setState(state => ({ 
        inputInvalid: {
          ...state.inputInvalid,
          password: true
        }
      }));
      console.log('password match but length short');
      return;
    }
    console.log('password match and length ok');
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then(() => {
    //   console.log('Signed up: ', email, password);
    // })
    // .catch(error => {
    //   const { code, message } = error;
    //   console.log('Signup error: ', code, message);
    // });
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(state => ({ 
      email,
      inputInvalid: {
       ...state.inputInvalid,
       email: false 
      }
    }));
  };
  onPasswordChange = e => {
    const password = e.target.value;
    this.setState(state => ({ 
      password,
      inputInvalid: {
       ...state.inputInvalid,
       password: false 
      }
    }));
  };
  onConfirmPasswordChange = e => {
    const confirmPassword = e.target.value;
    this.setState({ confirmPassword });
    this.setState(state => ({ 
      confirmPassword,
      inputInvalid: {
       ...state.inputInvalid,
       confirmPassword: false 
      }
    }));
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