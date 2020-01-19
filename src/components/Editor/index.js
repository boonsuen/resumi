import React from 'react';
import styled from 'styled-components';

import EditSection from './EditSection';
import ResumePreviewSection from './ResumePreviewSection';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Editor = () => {
  return (
    <MainContainer>
      <EditSection />
      <ResumePreviewSection />
    </MainContainer>
  );
};

export default Editor;