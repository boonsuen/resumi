import React from 'react';
import styled from 'styled-components';

import { Container } from './Header';

const AccountContainer = styled(Container)`
  padding-top: 57px;
`;

const Section = styled.div`
  width: 510px;
`;

const DangerZoneSection = styled(Section)`
  width: 420px;

  p {
    margin-bottom: 1rem;
    font-size: 14px;
    line-height: 1.2rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font-size: 18px;
`;

const Box = styled.div`
  padding: 31px 37px;
  margin-bottom: 44px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(213, 216, 229, 0.5);
`;

const Field = styled.div`
  margin-bottom: 0.9rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DisplayNameForm = styled.form`
  margin-bottom: 0;

  button {
    height: 40px;
    padding: 0 21px;
    border-radius: 3px;
    background: #508BFF;
    color: #fff;
    font-size: 14px;
    line-height: 40px;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  width: 340px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #D4DBEC;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  transition: all 0.3s;
  overflow: auto;

  &:focus {
    border-color: #A8C3FF;
    background-color: #FCFEFF;
  }

  &::placeholder {
    color: #c4c4c3;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #26282D;
    -webkit-box-shadow: 0 0 0px 1000px #FCFEFF inset;
    transition: background-color 5000s ease-in-out 0s, border-color 0.3s, background-color 0.3s;
  }
`;

const ChangePasswordBtn = styled.button`
  width: 155px;
  height: 40px;
  border: 1px solid #D4DBEC;
  border-radius: 3px;
  color: #65708C;
  font-size: 14px;
`;

const DeleteAccBtn = styled.button`
  padding: 0;
  color: #FF8395;
  font-size: 14px;
`;

class Account extends React.Component {
  render() {
    return (
      <AccountContainer>
        <Section>
          <Title>Profile</Title>
          <Box>
            <Field>
              <DisplayNameForm>
                <div><Label htmlFor="inputDisplayName">Display Name</Label></div>
                <div>
                  <Input type="text" placeholder="What's your name?" id="inputDisplayName" />
                  <button type="submit">Save</button>
                </div>
              </DisplayNameForm>
            </Field>
            <Field>
            <div><Label>Email</Label></div>
            <Input type="email" value="test@test.com" disabled />
            </Field>
            <Field>
              <div><Label>Password</Label></div>
              <ChangePasswordBtn type="button">Change password</ChangePasswordBtn>
            </Field>
          </Box>
        </Section>
        <DangerZoneSection>
          <Title>Danger zone</Title>
          <Box>
            <p>If you delete your account, all of the associated data will be removed, including all your resumes. You'll get a confirmation email first.</p>
            <DeleteAccBtn>Delete Account</DeleteAccBtn>
          </Box>
        </DangerZoneSection>
      </AccountContainer>
    );
  }
}

export default Account;