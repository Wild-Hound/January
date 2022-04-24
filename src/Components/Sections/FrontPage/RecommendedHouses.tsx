import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecommendedHouseCard from "../../Molecules/RecommendedHouseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { recommendedHousehouse } from "../../../Lib/Types";
import { useDispatch } from "react-redux";
import { updateHousesAvailableForRental } from "../../../Lib/Redux/Actions";

const Wrapper = styled.div`
  margin: 5rem auto;
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
  .swiper-button-prev,
  .swiper-button-next {
    color: black !important;
  }

  .swiper-pagination-bullet,
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: black;
    height: 5px;
    width: 25px;
    border-radius: 8px;
  }
`;

interface Props {
  housesData: recommendedHousehouse[] | undefined;
  title: string;
  subTitle?: string;
}
const RecommendedHouses: React.FC<Props> = ({
  housesData,
  title,
  subTitle,
}) => {
  return (
    <Wrapper>
      <Heading>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </Heading>
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
        {housesData?.map((house, index) => {
          return (
            <SwiperSlide key={index}>
              <RecommendedHouseCard data={house} />
            </SwiperSlide>
          );
        })}
      </RecommendedHousesWrapper>
    </Wrapper>
  );
};

export default RecommendedHouses;
