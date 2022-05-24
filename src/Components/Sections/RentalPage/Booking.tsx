import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getYear, getMonth, getDate, getDay } from "date-fns";
import DestinationGuests from "../../Molecules/DestinationGuests";
import OwnerInfo from "../../Molecules/OwnerInfo";

const ParentWrapper = styled.div`
  position: sticky;
  top: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid #aaa;
  border-radius: 5px;
  > div:first-child,
  .react-calendar.react-calendar--selectRange {
    border: none;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--active {
    background-color: #27ae60;
  }
`;

const GuestSelectorWrapper = styled.div`
  border-top: 1px solid #aaa;
`;

const BookButton = styled.button`
  border: none;
  outline: none;
  font-size: 1.15rem;
  color: white;
  background-color: #27ae60;
  width: 100%;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    background-color: #2ecc71;
  }
`;

const Booking = () => {
  const [value, onChange] = useState<Date[]>();
  const [formattedDate, setFormattedDate] = useState<string[]>();
  const [selectedAdults, setSelectedAdults] = useState(0);
  const [selectedChildern, setSelectedChildern] = useState(0);

  useEffect(() => {
    const tempArr: string[] = [];
    value?.forEach((date) => {
      let temp = `${getDay(date)} ${getDate(date)}-${getMonth(date)}-${getYear(
        date
      )}`;
      tempArr.push(temp);
    });

    setFormattedDate([...tempArr]);
  }, [value]);

  useEffect(() => {
    console.log(formattedDate);
  }, [formattedDate]);

  return (
    <ParentWrapper>
      <Wrapper>
        <Calendar
          onChange={onChange}
          // @ts-ignore
          value={value ?? new Date()}
          minDate={new Date()}
          selectRange={true}
          showWeekNumbers={true}
        />
        <GuestSelectorWrapper>
          <DestinationGuests
            selectedAdults={selectedAdults}
            setSelectedAdults={setSelectedAdults}
            selectedChildern={selectedChildern}
            setSelectedChildern={setSelectedChildern}
          />
        </GuestSelectorWrapper>
        <BookButton>Book</BookButton>
      </Wrapper>
      <OwnerInfo />
    </ParentWrapper>
  );
};

export default Booking;
