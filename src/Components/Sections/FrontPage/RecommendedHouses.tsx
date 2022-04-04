import React from "react";
import styled from "styled-components";
import { recommendedHouses } from "../../../Resources/fakeData";
import RecommendedHouseCard from "../../Molecules/RecommendedHouseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Wrapper = styled.div`
  margin: 2rem auto;
  max-width: fit-content;
`;
const Heading = styled.div`
  > h1 {
  }
  > p {
    font-weight: 600;
    color: rgb(94, 109, 119);
  }
`;

const RecommendedHousesWrapper = styled(Swiper)`
  max-width: 1160px;
  margin: 2rem 0;
`;

const RecommendedHouses = () => {
  return (
    <Wrapper>
      <Heading>
        <h1>Recommended Homes</h1>
        <p>Homes highly rated for thoughtful design</p>
      </Heading>
      {/* <RecommendedHousesWrapper> */}
      <RecommendedHousesWrapper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {recommendedHouses.map((house, index) => {
          return (
            <SwiperSlide key={index}>
              <RecommendedHouseCard data={house} />
            </SwiperSlide>
          );
        })}
      </RecommendedHousesWrapper>
      {/* </RecommendedHousesWrapper> */}
    </Wrapper>
  );
};

export default RecommendedHouses;
