import React from "react";
import styled from "styled-components";
import Destination from "../Components/Sections/FrontPage/Destination";
import RecommendedHouses from "../Components/Sections/FrontPage/RecommendedHouses";

const FrontPage = () => {
  return (
    <div>
      <Destination />
      <RecommendedHouses />
    </div>
  );
};

export default FrontPage;
