import React from "react";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";

function App() {
  return (
    <Container>
      <ParticlesBackground />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
`;
