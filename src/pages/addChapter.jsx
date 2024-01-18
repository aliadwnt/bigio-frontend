import React from 'react';
import styled from 'styled-components';
import { Navbar, NavbarWrapper } from '../components/navbar';
import Sidebar from '../components/sidebar';
import AddChapterForm from '../components/addChapterForm';
import { Link } from 'react-router-dom';

const AddChapter = () => {
  const handleCancel = () => {
    const isConfirmed = window.confirm('Are you sure you want to cancel Adding the story without saving data?');

    if (isConfirmed) {
      // Perform cancel action or navigate back
      // For now, let's assume you want to navigate back to the previous page
      window.history.back();
    }
  };

  return (
    <PageContainer>
      <Navbar />
      <Sidebar />
      <ContentContainer>
        <HeaderText>Add Chapter</HeaderText>
        <Container>
          <Link to="/addStory">
            <StyledLink>
              &lt; List Story &lt; Add Story
            </StyledLink>
          </Link>
        </Container>
        <h1>Add Story</h1>
        <AddChapterForm />
        <ButtonContainer>
          <CancelButton variant="secondary" onClick={handleCancel}>
            Cancel
          </CancelButton>
          {/* You can add a "Yes" button here if needed */}
          {/* <YesButton variant="primary" onClick={handleYes}>
            Yes
          </YesButton> */}
          <SaveButton variant="primary">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Save
            </Link>
          </SaveButton>
        </ButtonContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default AddChapter;

// Styled Components
const YesButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;
const PageContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLink = styled.div`
  font-size: 14px;
  margin-top: 20px;
  color: #007bff;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CancelButton = styled.button`
  background-color: #6c757d;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

const SaveButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
