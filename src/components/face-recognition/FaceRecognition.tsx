import React from "react";
import styled from "styled-components";

type Box = {
  leftCol: number | undefined;
  topRow: number | undefined;
  rightCol: number | undefined;
  bottomRow: number | undefined;
};

const FaceRecognition = ({ imageUrl, box }: { imageUrl: string; box: Box }) => {
  return (
    <ImageContainer>
      <InnerContainer>
        <Image alt="" id="inputimage" src={imageUrl} />
        <BoundingBox
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        />
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

const BoundingBox = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: -webkit--moz-box;
  display: --ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
`;
