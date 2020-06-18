import React from "react";
import styled from "styled-components";

const FaceRecognition = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <ImageContainer>
      <InnerContainer>
        <Image alt="" src={imageUrl} />
      </InnerContainer>
    </ImageContainer>
  );
};

export default FaceRecognition;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: var(--spacing-none);
`;

const InnerContainer = styled.div`
  position: absolute;
  margin-top: var(--spacing-small);
`;

const Image = styled.img`
  width: 500px;
  height: auto;
`;
