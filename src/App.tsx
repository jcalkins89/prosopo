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
  box: object;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  calculateFacePosition = (data: any) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info_bounding_box;
    const image: HTMLCanvasElement = document.getElementById(
      "inputimage"
    ) as HTMLCanvasElement;
    const width = Number(image!.width);
    const height = Number(image!.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayBoundingBox = (box: Object) => {
    this.setState({ box: box });
  };

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    try {
      clarifaiApp.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,
          // URL
          this.state.input
        )
        .then((response: any) =>
          this.displayBoundingBox(this.calculateFacePosition(response))
        );
    } catch (err) {
      console.log("There was an error: ", err);
    }
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
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  text-align: center;
`;
