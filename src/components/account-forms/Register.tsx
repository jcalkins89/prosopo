import React, { Component } from "react";
import styled from "styled-components";

interface IRegisterProp {
  onRouteChange: (param: string) => void;
  loadUser: (param: Object) => void;
}

type RegisterState = {
  email: string;
  password: string;
  name: string;
};

class RegisterForm extends Component<IRegisterProp, RegisterState> {
  constructor(props: IRegisterProp) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };

  onSubmitRegistration = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <Container>
        <Main>
          <Form>
            <Fieldset>
              <Legend>Register</Legend>
              <FormSection>
                <Label>Name</Label>
                <FormInput onChange={this.onNameChange} />
              </FormSection>
              <FormSection>
                <Label>Email</Label>
                <FormInput onChange={this.onEmailChange} />
              </FormSection>
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
                onClick={this.onSubmitRegistration}
                type="submit"
                value="Sign in"
              />
            </div>
          </Form>
        </Main>
      </Container>
    );
  }
}

export default RegisterForm;

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

const Legend = styled.legend`
  font-size: 3rem;
  font-weight: 600;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  display: block;
  color: white;
`;

const FormSection = styled.div`
  margin-top: 1rem;
  color: white;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  line-height: 1.5;
  font-size: 0.875rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  color: white;
  width: 100%;

  &:hover {
    background-color: black;
    color: white;
  }

  &:focus {
    background-color: black;
    outline: none;
    color: white;
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
    color: white;
  }

  &:focus {
    background-color: black;
    outline: none;
    color: white;
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
