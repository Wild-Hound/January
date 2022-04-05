import React from "react";
import styled from "styled-components";
import { review } from "../../Lib/Types";

const Wrapper = styled.div`
  max-width: 350px;
  margin: 2.5rem 0;
  padding: 1rem;
`;

const UserImage = styled.img`
  height: 85px;
  width: 85px;
  border-radius: 45px;
`;
const ReviewText = styled.p`
  color: #768092;
  margin-top: 1.5rem;
  font-size: 1rem;
`;
const Name = styled.h4`
  color: #1a2b48;
  margin-top: 1rem;
`;

interface Props {
  data: review;
}
const ReviewCard: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <UserImage src={data.img} />
      <ReviewText>{data.text}</ReviewText>
      <Name>{data.name}</Name>
    </Wrapper>
  );
};

export default ReviewCard;
