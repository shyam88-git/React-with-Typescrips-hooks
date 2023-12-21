// Navbar.tsx

import React from 'react';
import styled from 'styled-components';

interface NavbarProps {
  title: string;
}

const StyledNavbar = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: #fff;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const StyledListItem = styled.li`
  background-color: #b216eb;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-left: -80px;
`;

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <StyledNavbar>
      <StyledList>
        <StyledListItem>{title}</StyledListItem>
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;
