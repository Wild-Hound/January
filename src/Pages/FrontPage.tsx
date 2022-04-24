import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Destination from "../Components/Sections/FrontPage/Destination";
import HomeType from "../Components/Sections/FrontPage/HomeType";
import RecommendedHouses from "../Components/Sections/FrontPage/RecommendedHouses";
import SatasfiedCustomers from "../Components/Sections/FrontPage/SatasfiedCustomers";
import Subscribe from "../Components/Sections/FrontPage/Subscribe";
import { updateHousesAvailableForRental } from "../Lib/Redux/Actions";
import { recommendedHousehouse } from "../Lib/Types";
import { recommendedHouses } from "../Resources/fakeData";

const FrontPage = () => {
  const [housesData, setHousesData] = useState<recommendedHousehouse[]>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!recommendedHouses) {
      return;
    }
    setHousesData(recommendedHouses);
  }, [recommendedHouses]);

  useEffect(() => {
    if (!housesData) {
      return;
    }

    dispatch(updateHousesAvailableForRental(housesData));
  }, [housesData]);

  return (
    <div>
      <Destination />
      <RecommendedHouses
        housesData={housesData}
        title="Recommended Homes"
        subTitle="Homes highly rated for thoughtful design"
      />
      <HomeType />
      <SatasfiedCustomers />
      <Subscribe />
    </div>
  );
};

export default FrontPage;
