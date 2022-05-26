import React from "react";
import styled from "styled-components";
import BookingDetails from "../Components/Sections/Checkout/BookingDetails";
import SelectedBooking from "../Components/Sections/Checkout/SelectedBooking";

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;

const Checkout = () => {
  return (
    <Wrapper>
      <BookingDetails />
      <SelectedBooking />
    </Wrapper>
  );
};

export default Checkout;
