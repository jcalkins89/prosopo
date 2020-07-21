import React from "react";
import styled from "styled-components";

const Navigation = ({
  onRouteChange,
  isSignedIn,
}: {
  onRouteChange: (param: string) => void;
  isSignedIn: boolean;
}) => {
  if (isSignedIn) {
    return (
      <Nav>
        <p onClick={() => onRouteChange("signout")}>Sign Out</p>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <p onClick={() => onRouteChange("signin")}>Sign In</p>
        <p onClick={() => onRouteChange("register")}>Register</p>
      </Nav>
    );
  }
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  p {
    font-size: 1.5rem;
    font-weight: 300;
    text-decoration: none;
    color: #453f3c;
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
