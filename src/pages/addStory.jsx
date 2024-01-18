import React from 'react';
import styled from 'styled-components';
import { Navbar, NavbarWrapper } from '../components/navbar';
import Sidebar from '../components/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import StoryListForm from '../components/StoryListForm';
import ChapterTable from '../components/ChapterTable';
import { Link } from 'react-router-dom';

const ListStory = () => {
  return (
    <PageContainer>
      <Navbar />
      <Sidebar />
      <ContentContainer>
        <HeaderText>List Story</HeaderText>
        <Container>
        <Text>
            <Link to="/">
              &lt; List Story
            </Link>
          </Text>
        </Container>
        <TextContainer>Add Story</TextContainer>
        <StoryListForm />
        <hr />
        <ChapterTable/>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
`;
const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Menyusun elemen dalam kolom */
`;

const HeaderText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Menyusun elemen di sebelah kiri dan kanan */
  align-items: center; /* Menengahkan vertikal */
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  font-size: 34px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    /* Styling for FontAwesome icons */
    margin-right: 10px;
    color: #4CAF50;
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 15px;
  width: 300px;
`;
const AddStoryButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px; /* Tambahkan margin atas sesuai kebutuhan */
`;

const Text = styled.text`
 font-size: 14px;
 margin-top:20px;
`;

export default ListStory;
