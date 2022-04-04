import React from "react";
import styled from "styled-components";
import Destination from "../Components/Sections/FrontPage/Destination";
import HomeType from "../Components/Sections/FrontPage/HomeType";
import RecommendedHouses from "../Components/Sections/FrontPage/RecommendedHouses";

const FrontPage = () => {
  return (
    <div>
      <Destination />
      <RecommendedHouses />
      <HomeType />
    </div>
  );
};

export default FrontPage;
