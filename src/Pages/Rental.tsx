import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { globalState, recommendedHousehouse } from "../Lib/Types";
import Subscribe from "../Components/Sections/FrontPage/Subscribe";
import RecommendedHouses from "../Components/Sections/FrontPage/RecommendedHouses";
import MainContent from "../Components/Sections/RentalPage/MainContent";
import Booking from "../Components/Sections/RentalPage/Booking";
import OwnerInfo from "../Components/Molecules/OwnerInfo";

const RentalInfoWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  gap: 2rem;
`;

const SideNavbar = styled.div``;

const Rental = () => {
  const [rentalData, setRentalData] = useState<recommendedHousehouse>();

  const { id } = useParams();
  const navigate = useNavigate();

  const { housesAvailableForRental } = useSelector(
    (state: globalState) => state
  );

  useEffect(() => {
    if (!id || !housesAvailableForRental) {
      navigate("/", {
        replace: true,
      });
      return;
    }

    housesAvailableForRental.forEach((data) => {
      if (data.id === parseInt(id)) {
        setRentalData(data);
      }
    });
  }, [id, housesAvailableForRental]);

  useEffect(() => {
    console.log("rentaldata", rentalData);
  }, [rentalData]);

  return (
    <div>
      <RentalInfoWrapper>
        <MainContent rentalData={rentalData} />
        <SideNavbar>
          <Booking houseData={rentalData} />
        </SideNavbar>
      </RentalInfoWrapper>
      <RecommendedHouses
        housesData={housesAvailableForRental}
        title="You may also like"
      />
      <Subscribe />
    </div>
  );
};

export default Rental;
