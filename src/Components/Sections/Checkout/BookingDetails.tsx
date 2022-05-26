import { Input, Textarea } from "@nextui-org/react";
import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
`;
const RowWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2.75rem;
`;
const InputWrapper = styled.div`
  min-width: 18rem;
  width: 100%;
  > div {
    width: 100% !important;
  }
`;

const BookingDetails = () => {
  return (
    <div>
      <Heading>Booking Submission</Heading>
      <RowWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="First name" />
        </InputWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="Last name" />
        </InputWrapper>
      </RowWrapper>
      <RowWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="Email" />
        </InputWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="Phone" type="number" />
        </InputWrapper>
      </RowWrapper>
      <RowWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="Address Line 1" />
        </InputWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="Address Line 2" />
        </InputWrapper>
      </RowWrapper>
      <RowWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="City" />
        </InputWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="State/Province/Region" />
        </InputWrapper>
      </RowWrapper>
      <RowWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="ZIP code/Postal code" />
        </InputWrapper>
        <InputWrapper>
          <Input clearable bordered labelPlaceholder="Country" />
        </InputWrapper>
      </RowWrapper>
      <RowWrapper>
        <InputWrapper>
          <Textarea
            bordered
            color="secondary"
            labelPlaceholder="Special Requirements"
          />
        </InputWrapper>
      </RowWrapper>
    </div>
  );
};

export default BookingDetails;
