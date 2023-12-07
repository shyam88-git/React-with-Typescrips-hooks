import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarComponent = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 4.8rem;

    .list-style {
      
      transition: background-color 0.3s ease;
      &:active,
      &:hover {
        background-color: ${({ theme }) => theme.colors.btn}; 
      }
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const Nav: React.FC = () => {
  return (
    <NavbarComponent>
      <ul>
        <li className="list-style">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list-style">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="list-style">
          <NavLink to="/service">Service</NavLink>
        </li>
        <li className="list-style">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavbarComponent>
  );
};

export default Nav;
