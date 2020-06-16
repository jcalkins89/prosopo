import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <p>Sign Out</p>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  p {
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    transition: 0.15s ease-in;
    opacity: 1;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;