import React from "react";
import styled from "styled-components";
import destBg from "../../../Resources/destBg.jpg";

const BackgroudnImage = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: black; */
  background-image: url(${destBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  position: relative;
  filter: blur(1px) brightness(50%);
`;

const Wrapper = styled.div`
  display: flex;
  height: 75vh;
  width: 100%;
  justify-content: center;
`;
const HeadingText = styled.h1`
  color: white;
  position: absolute;
  margin-top: 5rem;
  font-size: 3.5rem;
  font-family: Roboto Slab;
`;

const Destination = () => {
  return (
    <Wrapper>
      <BackgroudnImage />
      <HeadingText>Find your next rental</HeadingText>
    </Wrapper>
  );
};

export default Destination;
