import React from 'react';
import styled from 'styled-components';

const HeaderStoryList = ({ HeaderStoryList }) => {
  return (
    <HeaderWrapper>
      <HeaderText>{HeaderStoryList}</HeaderText>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background-color: #3559E0;
  color: white;
  padding: 15px;
  text-align: center;
`;

const HeaderText = styled.h1`
  font-size: 20px;
  margin: 0;
`;

export default HeaderStoryList;
