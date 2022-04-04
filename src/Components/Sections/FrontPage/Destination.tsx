import React from "react";
import styled from "styled-components";
import destBg from "../../../Resources/destBg.jpg";
import DestinationFooter from "../../Molecules/DestinationFooter";
import DestinationSelector from "../../Organism/DestinationSelector";

const BackgroudnImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: black; */
  background-image: url(${destBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  filter: blur(1px) brightness(50%);
  z-index: -1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 75vh;
  /* width: 100%; */
  justify-content: center;
  min-width: fit-content;
`;
const HeadingText = styled.h1`
  color: white;
  text-align: center;
  margin-top: 5rem;
  font-size: 3.5rem;
  font-family: Roboto Slab;
`;

const Destination = () => {
  return (
    <Wrapper>
      <BackgroudnImage />
      <div>
        <HeadingText>Find your next rental</HeadingText>
        <DestinationSelector />
        <DestinationFooter />
      </div>
    </Wrapper>
  );
};

export default Destination;
