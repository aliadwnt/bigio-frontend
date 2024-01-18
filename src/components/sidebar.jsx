import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="lg" />
          <SidebarText>Home</SidebarText>
        </Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/">
          <FontAwesomeIcon icon={faBookOpen} size="lg" />
          <SidebarText>Management Story</SidebarText>
        </Link>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #F5F7F8;
  color: #3559E0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 65px; /* Sesuaikan dengan tinggi Navbar */
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s; /* Efek transisi warna latar saat hover */

  &:hover {
    border-left: 5px solid #3559E0; /* Warna border kiri saat hover */
  }
`;

const SidebarText = styled.span`
  margin-left: 10px;
  font-size: 14px
`;
