import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathroom } from "react-icons/md";
import { GiDogHouse } from "react-icons/gi";
import { recommendedHousehouse } from "../../Lib/Types";

const Meta = styled.div`
  > div {
    &:first-child {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding-bottom: 1.5rem;
    }
    &:last-child {
      display: flex;
      justify-content: space-between;
      margin-top: 1.25rem;
    }
  }
`;
const Title = styled.h1``;
const Rating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
    font-size: 1.15rem;
  }
`;

const Feture = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.75rem;
  > span {
    color: #27ae60;
  }
  > p {
    font-size: 1.15rem;
  }
`;

interface Props {
  rentalData: recommendedHousehouse | undefined;
}
const RentalMeta: React.FC<Props> = ({ rentalData }) => {
  function getRating() {
    const stars: any[] = [];

    const reviewNumbers = rentalData?.reviewsNumber ?? 0;
    const reviewString =
      rentalData?.reviewsNumber ?? 0 > 1
        ? `from ${rentalData?.reviewsNumber ?? 0} review`
        : `from ${rentalData?.reviewsNumber} reviews`;

    for (let i = reviewNumbers; i !== 0; i--) {
      stars.push(<BsStarFill />);
    }
    for (let i = 5 - (reviewNumbers ?? 5); i !== 0; i--) {
      stars.push(<BsStar />);
    }

    return (
      <Rating>
        <div>{stars}</div>
        <span>{reviewString}</span>
      </Rating>
    );
  }

  return (
    <Meta>
      <div>
        <Title>{rentalData?.name}</Title>
        {getRating()}
      </div>
      <div>
        <Feture>
          <span>
            <GiDogHouse />
          </span>
          <p>{rentalData?.meta.size}</p>
        </Feture>
        <Feture>
          <span>
            <BiBed />
          </span>
          <p>{rentalData?.meta.bed}</p>
        </Feture>
        <Feture>
          <span>
            <IoIosPeople />
          </span>
          <p>{rentalData?.meta.people}</p>
        </Feture>
        <Feture>
          <span>
            <MdOutlineBathroom />
          </span>
          <p>{rentalData?.meta.bathroom}</p>
        </Feture>
      </div>
    </Meta>
  );
};

export default RentalMeta;
