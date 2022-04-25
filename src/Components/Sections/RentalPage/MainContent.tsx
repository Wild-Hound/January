import React, { useState } from "react";
import styled from "styled-components";
import { recommendedHousehouse } from "../../../Lib/Types";
import RentalDescription from "../../Molecules/RentalDescription";
import RentalMwta from "../../Molecules/RentalMeta";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";

const Wrapper = styled.div`
  width: 75%;
`;

const CalendarWrapper = styled.div`
  .Calendar.-noFocusOutline.-ltr {
    width: 80%;
    margin: auto;
    margin-top: 2.5rem;
  }
  .Calendar__day.-ltr {
    border-radius: 5px !important;
  }
`;

interface Props {
  rentalData: recommendedHousehouse | undefined;
}
const MainContent: React.FC<Props> = ({ rentalData }) => {
  const [selectedDay, setSelectedDay] = useState<any>({
    from: null,
    to: null,
  });

  return (
    <Wrapper>
      <RentalMwta rentalData={rentalData} />
      <RentalDescription rentalData={rentalData} />
      <CalendarWrapper>
        <Calendar
          value={selectedDay}
          onChange={(e) => {
            setSelectedDay(e);
          }}
          renderFooter={() => (
            <button
              onClick={() => {
                console.log("clicked");
              }}
            >
              Hello World
            </button>
          )}
        />
      </CalendarWrapper>
    </Wrapper>
  );
};

export default MainContent;
