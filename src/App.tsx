import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      input: "",
    };
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");
  };

  render() {
    return (
      <Container>
        <ParticlesBackground />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  text-align: center;
`;
