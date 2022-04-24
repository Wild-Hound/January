import React from "react";
import styled from "styled-components";
import { IoIosPeople } from "react-icons/io";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathroom } from "react-icons/md";
import { GiDogHouse } from "react-icons/gi";
import { recommendedHousehouse } from "../../Lib/Types";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;
  max-width: fit-content;
  cursor: pointer;
`;
const HouseCard = styled.img`
  width: 375px;
  height: 285px;
`;
const HouseMeta = styled.div`
  padding: 1rem;
  > h2 {
  }
`;
const ReviewsWrapper = styled.div`
  display: flex;
  align-items: center;
  > span {
    height: 5px;
    width: 5px;
    border-radius: 10px;
    background-color: #666;
    margin: 0 0.5rem;
  }
  > div:first-child {
    font-weight: bold;
    color: #27ae60;
  }
  > div:last-child {
    font-weight: bold;
    color: #999;
  }
`;

const CardFooter = styled.div`
  border-top: 1px solid #ccc;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;
const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  > p {
    margin-top: -3px;
  }
`;
const FooterIcon = styled.div`
  font-size: 1.25rem;
`;

interface Props {
  data: recommendedHousehouse;
}
const RecommendedHouseCard: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  function handleClick() {
    console.log(data);
    navigate(`/rental/${data.id}`);
  }

  return (
    <Wrapper onClick={handleClick}>
      <HouseCard src={data.img} />
      <HouseMeta>
        <h2>{data.name}</h2>
        <h4>{data.location}</h4>
        <ReviewsWrapper>
          <div>Reviews: {data.rating}/5</div>
          <span />
          <div>
            {data.reviewsNumber}{" "}
            {data.reviewsNumber <= 1 ? "Review" : "Reviews"}
          </div>
        </ReviewsWrapper>
      </HouseMeta>
      <CardFooter>
        <FooterItem>
          <FooterIcon>
            <IoIosPeople />
          </FooterIcon>
          <p>{data.meta.people}</p>
        </FooterItem>
        <FooterItem>
          <FooterIcon>
            <BiBed />
          </FooterIcon>
          <p>{data.meta.bed}</p>
        </FooterItem>
        <FooterItem>
          <FooterIcon>
            <MdOutlineBathroom />
          </FooterIcon>
          <p>{data.meta.bathroom}</p>
        </FooterItem>
        <FooterItem>
          <FooterIcon>
            <GiDogHouse />
          </FooterIcon>
          <p>
            {data.meta.size} ft<sup>2</sup>
          </p>
        </FooterItem>
      </CardFooter>
    </Wrapper>
  );
};

export default RecommendedHouseCard;
