import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import { SignIn, RegisterForm } from "./components/account-forms";
import FaceRecognition from "./components/face-recognition/FaceRecognition";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";
import Clarifai from "clarifai";

export const clarifaiApp = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY,
});

type AppState = {
  input: string;
  imageUrl: string;
  box: Box;
  route: string;
  isSignedIn: boolean;
};

type Box = {
  leftCol: number | undefined;
  topRow: number | undefined;
  rightCol: number | undefined;
  bottomRow: number | undefined;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
      box: {
        leftCol: undefined,
        topRow: undefined,
        rightCol: undefined,
        bottomRow: undefined,
      },
      route: "signin",
      isSignedIn: false,
    };
  }

  calculateFacePosition = (data: any) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
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

  displayBoundingBox = (box: Box) => {
    this.setState({ box });
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
        .then((response: any) => {
          console.log("RESPONSE:", response);
          this.displayBoundingBox(this.calculateFacePosition(response));
        });
    } catch (err) {
      console.log("There was an error: ", err);
    }
  };

  onRouteChange = (route: string) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }

    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, box, imageUrl, route } = this.state;

    return (
      <Container>
        <ParticlesBackground />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        {route === "home" ? (
          <>
            <Logo /> <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </>
        ) : route === "signin" || route === "signout" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <RegisterForm onRouteChange={this.onRouteChange} />
        )}
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  text-align: center;
`;
