import React from "react";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";

function App() {
  return (
    <Container>
      <Navigation />
      <Logo />
      {/* <ImageLinkForm /> */}
      {/* <FaceRecognition /> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
`;
