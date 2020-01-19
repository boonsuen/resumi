import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48%;
  height: 100%;
  padding-top: 30px;
  background-color: #F5F9FA;
`;

const DownloadButton = styled.button`
  width: 150px;
  height: 42px;
  border-radius: 5px;
  background: #267FFD;
  color: #fff;
  margin-bottom: 10px;
`;

const ResumePreview = styled.div`
  width: 430px;
  height: 608px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(210, 213, 219, 0.5);
`;

const ResumePreviewSection = () => {
  return (
    <MainContainer>
      <DownloadButton>Download PDF</DownloadButton>
      <ResumePreview></ResumePreview>
    </MainContainer>
  );
};

export default ResumePreviewSection;