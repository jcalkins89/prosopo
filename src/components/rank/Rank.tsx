import React from "react";
import styled from "styled-components";

const Rank = ({ name, entries }: { name: string; entries: number | null }) => {
  return (
    <div>
      <Username>{`${name}, your current ranks is...`}</Username>
      <UserRank>{entries}</UserRank>
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
