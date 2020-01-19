import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ResumeName from './ResumeName';

import img_dashboard from '../../assets/img/app/icons/dashboard.svg';

const MainContainer = styled.div`
  padding: 30px 70px;
`;

const BackToDashboardButton = () => (
  <Link to="/app">
    <img src={img_dashboard} alt="Go back" />
  </Link>
);

const Title = styled.h2`
  color: #003A77;
  font-size: 18px;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const InputTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start
`;

const Label = styled.label`
  color: #003A77;
  font-size: 16px;
`;

const InputText = styled.input`
  width: 280px;
  height: 42px;
  padding: 0 10px;
  border-radius: 3px;
  border: none;
  outline: none;
  background: #F3F5F7;
`;

const EditSection = props => {
  return (
    <MainContainer>
      <BackToDashboardButton />
      <ResumeName />
      <div>
        <Title>Personal Details</Title>
        <InputsContainer>
          <InputTextGroup>
            <Label htmlFor="input-name">Name</Label>
            <InputText type="text" id="input-name" />
          </InputTextGroup>
          <InputTextGroup>
            <Label htmlFor="input-jobTitle1">Job Title</Label>
            <InputText type="text" id="input-jobTitle1" />
          </InputTextGroup>
          <InputTextGroup>
            <Label htmlFor="input-email">Email</Label>
            <InputText type="text" id="input-email" />
          </InputTextGroup>
          <InputTextGroup>
            <Label htmlFor="input-contactNumber">Contact Number</Label>
            <InputText type="text" id="input-contactNumber" />
          </InputTextGroup>
        </InputsContainer>
      </div>
      <div>
        <Title>Work Experience</Title>
        <InputsContainer>
          <InputTextGroup>
            <Label htmlFor="input-employer">Employer</Label>
            <InputText type="text" id="input-employer" />
          </InputTextGroup>
          <InputTextGroup>
            <Label htmlFor="input-jobTitle2">Job Title</Label>
            <InputText type="text" id="input-jobTitle2" />
          </InputTextGroup>
          <InputTextGroup>          
            <Label htmlFor="input-location">Location</Label>
            <InputText type="text" id="input-location" />
          </InputTextGroup>
        </InputsContainer>
      </div>
    </MainContainer>
  )
}

export default EditSection;