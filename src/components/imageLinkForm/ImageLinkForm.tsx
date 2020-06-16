import React from "react";
import styled from "styled-components";

const ImageLinkForm = () => {
  return (
    <LinkFormContainer>
      <LinkFormText>
        {"Enter an image to begin facial recognition scan"}
      </LinkFormText>
      <LinkFormOuter>
        <LinkFormInner>
          <Input type="text" />
          <Button>Detect</Button>
        </LinkFormInner>
      </LinkFormOuter>
    </LinkFormContainer>
  );
};

export default ImageLinkForm;

const LinkFormContainer = styled.div``;

const LinkFormOuter = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkFormInner = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  width: 700px;
  background: radial-gradient(
        circle farthest-side at 0% 50%,
        #fb1 23.5%,
        rgba(240, 166, 17, 0) 0
      )
      21px 30px,
    radial-gradient(
        circle farthest-side at 0% 50%,
        #b71 24%,
        rgba(240, 166, 17, 0) 0
      )
      19px 30px,
    linear-gradient(
        #fb1 14%,
        rgba(240, 166, 17, 0) 0,
        rgba(240, 166, 17, 0) 85%,
        #fb1 0
      )
      0 0,
    linear-gradient(
        150deg,
        #fb1 24%,
        #b71 0,
        #b71 26%,
        rgba(240, 166, 17, 0) 0,
        rgba(240, 166, 17, 0) 74%,
        #b71 0,
        #b71 76%,
        #fb1 0
      )
      0 0,
    linear-gradient(
        30deg,
        #fb1 24%,
        #b71 0,
        #b71 26%,
        rgba(240, 166, 17, 0) 0,
        rgba(240, 166, 17, 0) 74%,
        #b71 0,
        #b71 76%,
        #fb1 0
      )
      0 0,
    linear-gradient(90deg, #b71 2%, #fb1 0, #fb1 98%, #b71 0%) 0 0 #fb1;
  background-size: 40px 60px;
`;

const LinkFormText = styled.p`
  font-size: 1.5rem;
  color: #f4f4f4;
`;

const Input = styled.input`
  font-size: 1.25rem;
  padding: var(--spacing-small);
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`;

const Button = styled.button`
  margin-top: 1.5%;
  /* padding-left: var(--spacing-medium);
  padding-right: var(--spacing-medium);
  padding-top: var(--spacing-medium);
  padding-bottom: var(--spacing-small); */

  display: inline-block;
  text-transform: uppercase;
  background-color: #cb32b8;
  border: 2px solid none;
  color: #f4f4f4;
  width: 30%;
  outline: none !important;
  font-size: 1.25rem;
  border-radius: 3%;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    /* opacity: 0.8; */
    box-shadow: 0 14px 26px -12px;
  }
`;
