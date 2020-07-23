import React from "react";
import styled from "styled-components";

const ImageLinkForm = ({
  onInputChange,
  onPictureSubmit,
}: {
  onInputChange: any;
  onPictureSubmit: any;
}) => {
  return (
    <div>
      <LinkFormText>
        {"Enter an image to begin facial recognition scan"}
      </LinkFormText>
      <LinkFormOuter>
        <LinkFormInner>
          <Input type="text" onChange={onInputChange} />
          <Button onClick={onPictureSubmit}>Detect</Button>
        </LinkFormInner>
      </LinkFormOuter>
    </div>
  );
};

export default ImageLinkForm;

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
  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(
      #1d1d1d 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      transparent 50%,
      transparent 75%,
      #242424 75%,
      #242424
    );
  background-size: 40px 60px;
  background-color: #131313;
`;

const LinkFormText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

const Input = styled.input`
  font-size: 1.25rem;
  font-weight: 500;
  padding: var(--spacing-small);
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`;

const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  background-color: #453f3c;
  border: 2px solid none;
  color: #f4f4f4;
  width: 30%;
  outline: none !important;
  font-size: 1.25rem;
  font-weight: 300;
  border-radius: 3%;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 14px 26px -12px;
  }
`;
