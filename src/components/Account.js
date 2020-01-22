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
    font-size: 14px;
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

const DisplayNameForm = styled.form`

  button {
    height: 40px;
    border-radius: 3px;
    background: #508BFF;
    color: #fff;
  }
`;

const Label = styled.label`
  display: block;
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

  &:focus {
    border-color: #A8C3FF;
    background: #FCFEFF;
  }

  &::placeholder {
    color: #c4c4c3;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    border: 1px solid #A8C3FF;
    -webkit-text-fill-color: #26282D;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const DeleteAccBtn = styled.button`
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
            <DisplayNameForm>
              <Label htmlFor="inputDisplayName">Display Name</Label>
              <Input type="text" placeholder="What's your name?" id="inputDisplayName" />
              <button type="submit">Save</button>
            </DisplayNameForm>
            <Label>Email</Label>
            <Input type="email" value="test@test.com" disabled />
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