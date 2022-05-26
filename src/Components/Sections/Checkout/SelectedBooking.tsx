import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";

const Heading = styled.h1`
  margin-bottom: 1.5rem;
`;

const CardWrapper = styled.div`
  border: 1px solid #aaa;
`;
const CardRow = styled.div`
  padding: 1.5rem;
`;
const InnerWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
const PlaceInfo = styled.div`
  h3 {
    margin: 1rem 0;
  }
  p {
    display: flex;

    > span {
      margin-right: 0.25rem;
      transform: translateY(2px);
      color: #999;
    }
  }
`;
const PlaceImg = styled.img`
  height: 6.875rem;
  width: 6.875rem;
`;

const SelectedBooking = () => {
  return (
    <div>
      <Heading>Your Booking</Heading>
      <CardWrapper>
        <CardRow>
          <InnerWrapper>
            <PlaceInfo>
              <h3>Best of West Village</h3>
              <p>
                <span>
                  <GoLocation />
                </span>{" "}
                New York City, NY, USA
              </p>
            </PlaceInfo>
            <PlaceImg src="https://remap.travelerwp.com/wp-content/uploads/2015/01/2018-08-21-16-38-31-029636-322W20thSt_Kitchen1_23-scaled-110x110.jpg" />
          </InnerWrapper>
        </CardRow>
        <hr />
        <CardRow>
          <InnerWrapper></InnerWrapper>
          <InnerWrapper></InnerWrapper>
        </CardRow>
      </CardWrapper>
    </div>
  );
};

export default SelectedBooking;
