import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import firebase from '../firebase';
import Layout from './components/Layout';
import SEO from '../components/seo';
import img_shieldlock from '../assets/img/shieldlock.svg';

export const MainAuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const AuthContainer = styled.div`
  width: 600px;
  padding: 55px 75px;
  border-radius: 10px;
  box-shadow: 0 2px 11px -2px rgba(128, 155, 208, .5);

  h1 {
    color: #000948;
    font-size: 22px;
  }

  form {
    margin: 0;
  }
`;

export const AuthFormLabel = styled.label`
  display: block;
  color: #000948;
  padding-bottom: 9px;
`;

export const AuthFormInput = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  padding-left: 15px;
  margin-bottom: 24px;
  border: 1px solid ${props => props.invalid ? '#fc354a' : '#e0e5e9'};
  border-radius: 5px;
  color: #26282D;
  font-size: 16px;
  transition: all .3s;
  overflow: auto;

  &:focus {
    border-color: #0555FF;
    outline: none;
  }

  &::placeholder {
    color: #c4c4c3;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    border: 1px solid ${props => props.invalid ? '#fc354a' : '#e0e5e9'};
    -webkit-text-fill-color: #26282D;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const DivSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgotPassword = styled(Link)`
  color: #6B707B;
  font-size: 16px;
  margin-bottom: 7px;
`;

export const AuthFormActions = styled(DivSpaceBetween)`
  margin-top: 35px;
`;

export const ReverseAuthLink = styled(Link)`
  color: #26282D;
  font-size: 16px;
`;

const StyledAuthFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 50px;
  border-radius: 5px;
  background: ${props => props.loading ? "#5465ff" : "#4353ff"};
  color: #fff;
  font-size: 18px;
  transition: background 0.3s;
`;

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
  border-radius: 50%;
  animation: ${rotate} 340ms infinite linear;
`;

export const AuthFormButton = ({ text, loading }) => (
  <StyledAuthFormButton type="submit" loading={loading ? 1 : 0}>
    {!loading ? text : <Loading />}
  </StyledAuthFormButton>
);

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
    inputInvalid: {
      email: false,
      password: false
    },
    loading: false
  };
  handleLogin = e => {
    e.preventDefault();
    const { 
      email, 
      password
    } = this.state;
    this.setState({
      inputInvalid: {
        email: false,
        password: false
      }
    });
    if (!email.trim()) {
      this.setState(state => ({ 
        inputInvalid: {
          ...state.inputInvalid,
          email: true
        }
      }));
    }
    if (password.length < 6) {
      this.setState(state => ({ 
        inputInvalid: {
          ...state.inputInvalid,
          password: true
        }
      }));
      return;
    }
    this.setState({
      loading: true
    }, () => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Signed in');
      })
      .catch(error => {
        const { code, message } = error;
        console.log(message);        
        if (code === 'auth/invalid-email' || code === 'auth/user-not-found') {
          this.setState(state => ({ 
            inputInvalid: {
              ...state.inputInvalid,
              email: true 
            },
            loading: false
          }));
        } else if (code === 'auth/wrong-password') {
          this.setState(state => ({ 
            inputInvalid: {
              ...state.inputInvalid,
              password: true 
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
        <SEO title="Login" />
        <MainAuthWrapper>
          <ImgWrapper><img src={img_shieldlock} alt="Shield lock" /></ImgWrapper>
          <AuthContainer>
            <h1>Login to your Resumi account</h1>
            <form onSubmit={this.handleLogin}>
              <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
              <AuthFormInput 
                type="email" placeholder="you@example.com" 
                spellCheck="false" id="email" name="email"
                onChange={this.onInputChange} invalid={inputInvalid.email}
              />
              <DivSpaceBetween>
                <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
                <ForgotPassword to="/amnesia">Forgot password?</ForgotPassword>
              </DivSpaceBetween>
              <AuthFormInput 
                type="password" placeholder="Enter your password" 
                id="password" name="password"
                onChange={this.onInputChange} invalid={inputInvalid.password}
              />
              <AuthFormActions>
                <AuthFormButton text="Log In" loading={loading} />
                <ReverseAuthLink to="/signup">Don't have an account?</ReverseAuthLink>
              </AuthFormActions>
            </form>
          </AuthContainer>
        </MainAuthWrapper>
      </Layout>
    );
  }
}

export default LoginPage;