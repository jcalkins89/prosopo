import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Main>
      <Form>
        <Fieldset>
          <SignInTitle>Sign In</SignInTitle>
          <EmailAddressSection>
            <Label>Email</Label>
            <EmailInput />
          </EmailAddressSection>
          <PasswordSection>
            <Label>Password</Label>
            <PasswordInput />
          </PasswordSection>
          <RememberLabel>
            <input type="checkbox">Remember Me</input>
          </RememberLabel>
        </Fieldset>
        <div>
          <SignInButton type="submit" value="Sign in" />
        </div>
        <AccountRecoverySection>
          <AccountOption href="#0">Sign Up</AccountOption>
          <AccountOption href="#0">Forgot Password</AccountOption>
        </AccountRecoverySection>
      </Form>
    </Main>
  );
};

export default SignIn;

const Main = styled.main`
  padding: 2rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Form = styled.form`
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
  font-size: 1.25rem;
  font-weight: 600;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
`;

const EmailAddressSection = styled.div`
  margin-top: 1rem;
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
  width: 100%;

  &:hover {
    background-color: #000;
  }
`;

const PasswordSection = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PasswordInput = styled.input`
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  width: 100%;
  font-weight: bold;

  &:hover {
    background-color: #000;
  }
`;

const RememberLabel = styled.label`
  padding: 0;
  margin: 0;
  line-height: 1.5;
  font-size: 0.875rem;

  &:hover {
    cursor: pointer;
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
  border-color: #000;
  background-color: transparent;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  font-size: 0.875rem;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`;

const AccountRecoverySection = styled.div`
  line-height: 1.5;
  margin-top: 1rem;
`;

const AccountOption = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.15s ease-in;
  opacity: 1;
  transition: opacity 0.15s ease-in;
  color: #000;
  display: block;
`;
