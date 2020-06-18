import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import FaceRecognition from "./components/face-recognition/FaceRecognition";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";
import Clarifai from "clarifai";

export const clarifaiApp = new Clarifai.App({
  apiKey: "813c114e7c0f4023b145ac87cb96f1e4",
});

type AppState = {
  input: string;
  imageUrl: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    clarifaiApp.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // URL
        this.state.input
      )
      .then(
        function (response: any) {
          console.log(
            "This is your response: ",
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function (err: Error) {
          console.log("There was an error: ", err);
        }
      );
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  text-align: center;
`;
