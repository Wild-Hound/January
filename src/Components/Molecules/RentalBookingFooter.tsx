import React, { useState } from "react";
import styled from "styled-components";
import DestinationGuests from "./DestinationGuests";

const Wrapper = styled.div`
  width: 100%;
  font-size: 1rem;
`;

const BookButton = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  padding: 1rem;
  font-family: Roboto Slab;
  background-color: #27ae60;
  color: white;
`;

interface Props {
  selectedAdults: number;
  selectedChildern: number;
  setSelectedAdults: React.Dispatch<React.SetStateAction<number>>;
  setSelectedChildern: React.Dispatch<React.SetStateAction<number>>;
  bookButtonAction(): void;
}
const RentalBookingFooter: React.FC<Props> = ({
  selectedAdults,
  selectedChildern,
  setSelectedAdults,
  setSelectedChildern,
  bookButtonAction,
}) => {
  return (
    <Wrapper>
      <DestinationGuests
        selectedAdults={selectedAdults}
        setSelectedAdults={setSelectedAdults}
        selectedChildern={selectedChildern}
        setSelectedChildern={setSelectedChildern}
      />
      <BookButton onClick={bookButtonAction}>Book</BookButton>
    </Wrapper>
  );
};

export default RentalBookingFooter;
