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
          background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
        }}
      >
        <div className="Tilt-inner">
          <img src={brain} style={{ color: "white", fill: "white" }} />
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

// const LogoIcon = styled.image`
//     margin-top: 1;
//     fill: white;
//     color: white
// `
