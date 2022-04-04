import React from "react";
import { MdApartment } from "react-icons/md";
import { BiBuildingHouse, BiVideoRecording } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";
import { GiFamilyHouse, GiVillage } from "react-icons/gi";

import styled from "styled-components";

const BackgroundWrapper = styled.div`
  background-color: #eaeaea;
  padding: 5rem 1rem;
`;
const Wrapper = styled.div`
  max-width: 1160px;
  margin: auto;
`;
const Heading = styled.div`
  > h1 {
  }
  > p {
    font-weight: 600;
    color: rgb(94, 109, 119);
  }
`;
const CatagoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  cursor: pointer;
`;

const Catagory = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: white;
  height: 165px;
  width: 165px;
  font-size: 3.5rem;
  transition: all 0.5s;
  &:hover {
    font-size: 4.25rem;
  }
`;
const CatagoryIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #999;
`;
const CatagoryText = styled.p`
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  color: #333;
  font-size: 1rem;
`;

const catagories = [
  { text: "Apartment", icon: <MdApartment /> },
  { text: "Condo", icon: <BiBuildingHouse /> },
  { text: "Duplex", icon: <BsFillHouseFill /> },
  { text: "House", icon: <GiFamilyHouse /> },
  { text: "Studio", icon: <BiVideoRecording /> },
  { text: "Townhome", icon: <GiVillage /> },
];

const HomeType = () => {
  return (
    <BackgroundWrapper>
      <Wrapper>
        <Heading>
          <h1>Find a Home Type</h1>
          <p>It is a long established fact that a reader</p>
        </Heading>
        <CatagoryWrapper>
          {catagories.map((catagory, index) => (
            <Catagory key={index}>
              <CatagoryIcon>{catagory.icon}</CatagoryIcon>
              <CatagoryText>{catagory.text}</CatagoryText>
            </Catagory>
          ))}
        </CatagoryWrapper>
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default HomeType;
