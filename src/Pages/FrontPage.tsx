import React from "react";
import styled from "styled-components";
import Destination from "../Components/Sections/FrontPage/Destination";
import HomeType from "../Components/Sections/FrontPage/HomeType";
import RecommendedHouses from "../Components/Sections/FrontPage/RecommendedHouses";
import SatasfiedCustomers from "../Components/Sections/FrontPage/SatasfiedCustomers";
import Subscribe from "../Components/Sections/FrontPage/Subscribe";

const FrontPage = () => {
  return (
    <div>
      <Destination />
      <RecommendedHouses />
      <HomeType />
      <SatasfiedCustomers />
      <Subscribe />
    </div>
  );
};

export default FrontPage;
