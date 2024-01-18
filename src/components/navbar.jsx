import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoContainer>
        <LogoImage src={logo} alt="Logo" />
        <WebsiteName>StoryKu</WebsiteName>
      </LogoContainer>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color:#3559E0;
  color: white;
  z-index: 1000; /* Membuat navbar muncul di atas konten */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px; 
  height: 40px; 
  margin-right: 10px;
`;

const WebsiteName = styled.h1`
  font-size: 20px;
  margin: 0;
`;

export { Navbar, NavbarWrapper };
