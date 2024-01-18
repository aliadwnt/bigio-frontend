import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar, NavbarWrapper } from '../components/navbar';
import Sidebar from '../components/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import StoryListTable from '../components/StoryListTable';
import { Link } from 'react-router-dom';

const ListStory = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = () => {
    setShowFilter(true);
  };

  const handleFilterClose = () => {
    setShowFilter(false);
  };

  return (
    <PageContainer>
      <Navbar />
      <Sidebar />
      <ContentContainer>
        <HeaderText>List Story</HeaderText>
        <Container>
          <TextContainer>List Story</TextContainer>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search by writer's name/title story"
            />
            <FontAwesomeIcon icon={faSearch} style={{ color: '#007BFF', cursor: 'pointer' }} />
  <FontAwesomeIcon icon={faFilter} onClick={handleFilterClick} style={{ color: '#007BFF', cursor: 'pointer' }} />
            <Link to="/addStory">
              <AddStoryButton>Add Story</AddStoryButton>
            </Link>
          </SearchContainer>
        </Container>
        <StoryListTable />

        {/* Filter Modal */}
        {showFilter && (
          <FilterModal>
            <FilterHeader>Filter</FilterHeader>
            <FilterSection>
              <FilterLabel>Category</FilterLabel>
              <FilterSelect>
                <option>Financial</option>
                <option>Technology</option>
                <option>Health</option>
              </FilterSelect>
            </FilterSection>
            <FilterSection>
              <FilterLabel>Status</FilterLabel>
              <FilterSelect>
                <option>Draft</option>
                <option>Publish</option>
              </FilterSelect>
            </FilterSection>
            <FilterButtons>
              <FilterButton onClick={handleFilterClose}>Cancel</FilterButton>
              <FilterButton>Reset</FilterButton>
              <FilterButton>Filter</FilterButton>
            </FilterButtons>
          </FilterModal>
        )}
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

const TextContainer = styled.div`
  font-size: 34px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    margin-right: 10px;
    color: #4CAF50;
    cursor: pointer;
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
  background-color: #3559E0;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const FilterModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1000;
`;

const FilterHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const FilterSelect = styled.select`
  padding: 8px;
  font-size: 14px;
  width: 100%;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FilterButton = styled.button`
  background-color: #3559E0;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

export default ListStory;