import React, { Component } from "react";
import styled from "styled-components";

interface ISignInProp {
  onRouteChange: (param: string) => void;
  loadUser: (param: Object) => void;
}

type SignInState = {
  signInEmail: string;
  signInPassword: string;
};

class SignIn extends Component<ISignInProp, SignInState> {
  constructor(props: ISignInProp) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ signInEmail: e.target.value });
  };

  onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ signInPassword: e.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://agile-lowlands-65056.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <Container>
        <Main>
          <Form>
            <Fieldset>
              <SignInTitle>Sign In</SignInTitle>
              <EmailAddressSection>
                <Label>Email</Label>
                <EmailInput onChange={this.onEmailChange} type="email" />
              </EmailAddressSection>
              <PasswordSection>
                <Label>Password</Label>
                <PasswordInput
                  onChange={this.onPasswordChange}
                  type="password"
                />
              </PasswordSection>
            </Fieldset>
            <div>
              <SignInButton
                onClick={this.onSubmitSignIn}
                type="submit"
                value="Sign in"
              />
            </div>
            <AccountOptionsSection>
              <AccountOption onClick={() => onRouteChange("register")}>
                Register
              </AccountOption>
            </AccountOptionsSection>
          </Form>
        </Main>
      </Container>
    );
  }
}

export default SignIn;

const Container = styled.article`
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  color: #333;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 32rem;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 30em) and (max-width: 60em) {
    .w-50-m {
      width: 50%;
    }
  }

  @media screen and (min-width: 60em) {
    .w-25-l {
      width: 25%;
    }
  }
`;

const Main = styled.main`
  padding: 2rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Form = styled.div`
  max-width: 30em;
  margin-right: auto;
  margin-left: auto;
`;

const Fieldset = styled.fieldset`
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
`;

const SignInTitle = styled.legend`
  font-size: 3rem;
  font-weight: 600;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  display: block;
  color: white;
`;

const EmailAddressSection = styled.div`
  margin-top: 1rem;
  color: white;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  line-height: 1.5;
  font-size: 0.875rem;
`;

const EmailInput = styled.input`
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  color: white;
  width: 100%;
  font-weight: bold;

  &:hover {
    background-color: black;
    color: #22b455;
  }

  &:focus {
    background-color: black;
    outline: none;
    color: #22b455;
  }
`;

const PasswordSection = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;
`;

const PasswordInput = styled.input`
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  color: white;
  width: 100%;
  font-weight: bold;

  &:hover {
    background-color: black;
    color: #22b455;
  }

  &:focus {
    background-color: black;
    outline: none;
    color: #22b455;
  }
`;

const SignInButton = styled.input`
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  background-color: transparent;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  font-size: 0.875rem;
  display: inline-block;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const AccountOptionsSection = styled.div`
  line-height: 1.5;
  margin-top: 1rem;
`;

const AccountOption = styled.p`
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.15s ease-in;
  opacity: 1;
  transition: opacity 0.15s ease-in;
  color: white;
  display: block;
  cursor: pointer;
`;
