import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <LogoContainer>
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{
          height: 150,
          width: 150,
          borderRadius: ".25rem",
          boxShadow: "0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )",
          // background: "rgb(131,58,180)",
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(165,22,39,1) 50%, rgba(252,176,69,1) 100%)",
        }}
      >
        <div className="Tilt-inner">
          <LogoIcon src={brain} />
        </div>
      </Tilt>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  margin: 2rem;
  margin-top: 0;
`;

const LogoIcon = styled.img`
  padding-top: 25px;
  height: 100px;
  width: 100px;
`;
