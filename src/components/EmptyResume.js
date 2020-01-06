import React from 'react';
import styled from 'styled-components';

import img_folder from '../assets/img/app/folder.svg';

const StyledEmptyResume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;

  img {
    margin: 30px 0 10px 0;
  }

  p {
    margin: 10px 0;
    color: #0F0F28;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.45em;
  }

  button {
    width: 159px;
    height: 42px;
    margin: 16px 0 30px 0;
    border-radius: 5px;
    background-color: #0069FE;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
`;

const EmptyResume = () => (
  <StyledEmptyResume>
    <img src={img_folder} alt="Folder illustration" />
    <p>Oops... It's empty here.<br />Let's create your resume</p>
    <button>+ New resume</button>
  </StyledEmptyResume>
);

export default EmptyResume;