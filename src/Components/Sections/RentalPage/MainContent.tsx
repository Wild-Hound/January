import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { recommendedHousehouse } from "../../../Lib/Types";

const Wrapper = styled.div`
  width: 75%;
`;

const Meta = styled.div`
  > div {
    &:first-child {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const Title = styled.h1``;
const Rating = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  > div {
    color: #f1c40f;
    font-size: 1.15rem;
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
  > span {
    color: #27ae60;
    text-align: end;
  }
`;

interface Props {
  rentalData: recommendedHousehouse | undefined;
}
const MainContent: React.FC<Props> = ({ rentalData }) => {
  const reviewNumbers =
    rentalData?.reviewsNumber ?? 0 > 1
      ? `from ${rentalData?.reviewsNumber ?? 0} review`
      : `from ${rentalData?.reviewsNumber} reviews`;

  return (
    <Wrapper>
      <Meta>
        <div>
          <Title>{rentalData?.name}</Title>
          <Rating>
            <div>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <span>{reviewNumbers}</span>
          </Rating>
        </div>
      </Meta>
    </Wrapper>
  );
};

export default MainContent;
