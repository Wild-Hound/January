import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-left: 1px solid #ccc;
  cursor: pointer;
`;

const Icon = styled.div`
  color: #999;
  font-size: 1.5rem;
`;
const Meta = styled.div`
  > p {
    color: #999;
  }
`;
const DestinationText = styled.p`
  color: #27ae60 !important;
`;

const DestinationLocation = () => {
  return (
    <Wrapper>
      <Icon>
        <GoLocation />
      </Icon>
      <Meta>
        <p>Destination</p>
        <DestinationText>Dhaka</DestinationText>
      </Meta>
    </Wrapper>
  );
};

export default DestinationLocation;
