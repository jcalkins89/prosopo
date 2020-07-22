import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import { SignIn, RegisterForm } from "./components/account-forms";
import FaceRecognition from "./components/face-recognition/FaceRecognition";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";

type User = {
  id: string;
  name: string;
  email: string;
  entries: number;
  joined: string;
};

type AppState = {
  input: string;
  imageUrl: string;
  box: Box;
  route: string;
  isSignedIn: boolean;
  user: User;
};

type Box = {
  leftCol: number | undefined;
  topRow: number | undefined;
  rightCol: number | undefined;
  bottomRow: number | undefined;
};

const initialState = {
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
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = initialState;
  }

  loadUser = (data: any) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

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

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("http://localhost:3000/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response: any) => {
        if (response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count: number) => {
              this.setState({
                user: Object.assign(this.state.user, { entries: count }),
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
        this.displayBoundingBox(this.calculateFacePosition(response));
      });
  };

  onRouteChange = (route: string) => {
    if (route === "signout") {
      this.setState(initialState);
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
            <Logo />{" "}
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </>
        ) : route === "signin" || route === "signout" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <RegisterForm
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  text-align: center;
`;
