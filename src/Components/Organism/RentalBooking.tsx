import React, { useState } from "react";
import styled from "styled-components";
import { Calendar, DayRange } from "react-modern-calendar-datepicker";
import RentalBookingFooter from "../Molecules/RentalBookingFooter";
import { notification } from "antd";
import { recommendedHousehouse } from "../../Lib/Types";
import { useDispatch } from "react-redux";
import { updateCart } from "../../Lib/Redux/Actions";
import { useNavigate } from "react-router-dom";

const CalendarWrapper = styled.div`
  position: sticky;
  top: 0;
`;

interface Props {
  rentalData: recommendedHousehouse | undefined;
}
const RentalBooking: React.FC<Props> = ({ rentalData }) => {
  const [selectedDay, setSelectedDay] = useState<DayRange>({
    from: null,
    to: null,
  });
  const [selectedAdults, setSelectedAdults] = useState(0);
  const [selectedChildern, setSelectedChildern] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function bookButtonAction() {
    if (!rentalData) {
      return;
    }
    if (!selectedDay.to) {
      notification["info"]({
        message: "Selete a date range",
      });
      return;
    }
    if (!selectedAdults) {
      notification["info"]({
        message: "Selete number of guests",
      });
      return;
    }

    await dispatch(
      updateCart({
        houseData: rentalData,
        date: selectedDay,
        selectedAdults: selectedAdults,
        selectedChildern: selectedChildern,
      })
    );

    navigate("/test");
  }

  return (
    <CalendarWrapper>
      <Calendar
        value={selectedDay}
        onChange={(e) => {
          setSelectedDay(e);
        }}
        renderFooter={() => (
          <RentalBookingFooter
            selectedAdults={selectedAdults}
            selectedChildern={selectedChildern}
            setSelectedAdults={setSelectedAdults}
            setSelectedChildern={setSelectedChildern}
            bookButtonAction={bookButtonAction}
          />
        )}
      />
    </CalendarWrapper>
  );
};

export default RentalBooking;
