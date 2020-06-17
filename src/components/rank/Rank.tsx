import React from "react";
import styled from "styled-components";

const Rank = () => {
  return (
    <div>
      <Username>{"Josh your current rank is..."}</Username>
      <UserRank>{"#5"}</UserRank>
    </div>
  );
};

export default Rank;

const Username = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
`;

const UserRank = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 500;
`;
