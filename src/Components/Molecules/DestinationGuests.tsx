import React from "react";
import styled from "styled-components";
import { BsPeople } from "react-icons/bs";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* border-right: 1px solid #ccc; */
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

const DestinationGuests = () => {
  return (
    <Wrapper>
      <Icon>
        <BsPeople />
      </Icon>
      <Meta>
        <p>Guests</p>
        <DestinationText>4 Adults - 4 Children</DestinationText>
      </Meta>
    </Wrapper>
  );
};

export default DestinationGuests;
