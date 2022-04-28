import React, { useState } from "react";
import styled from "styled-components";
import { recommendedHousehouse } from "../../../Lib/Types";
import RentalDescription from "../../Molecules/RentalDescription";
import RentalMwta from "../../Molecules/RentalMeta";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import RentalBooking from "../../Organism/RentalBooking";

const Wrapper = styled.div`
  width: 75%;
`;

interface Props {
  rentalData: recommendedHousehouse | undefined;
}
const MainContent: React.FC<Props> = ({ rentalData }) => {
  return (
    <Wrapper>
      <RentalMwta rentalData={rentalData} />
      <RentalDescription rentalData={rentalData} />
    </Wrapper>
  );
};

export default MainContent;
