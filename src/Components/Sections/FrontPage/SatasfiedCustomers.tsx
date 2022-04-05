import React from "react";
import styled from "styled-components";
import ReviewCard from "../../Molecules/ReviewCard";
import { reviews } from "../../../Resources/fakeData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Wrapper = styled.div`
  max-width: fit-content;
  justify-content: center;
  margin: 5rem auto;
  text-align: center;
  /* padding-bottom: 5rem; */
`;
const CardsWrapper = styled.div`
  display: flex;
`;

const RecommendedHousesWrapper = styled(Swiper)`
  max-width: 1160px;
  margin: 2rem 0;
`;

const Heading = styled.h1``;

const SatasfiedCustomers = () => {
  return (
    <Wrapper>
      <Heading>Meet Some Happy Customers</Heading>
      <RecommendedHousesWrapper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <ReviewCard data={review} />
            </SwiperSlide>
          );
        })}
      </RecommendedHousesWrapper>
      {/* <CardsWrapper>
        
      </CardsWrapper> */}
    </Wrapper>
  );
};

export default SatasfiedCustomers;
