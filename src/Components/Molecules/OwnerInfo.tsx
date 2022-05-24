import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2.5rem;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 0.75rem 1.15rem;
`;
const Heading = styled.p`
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: -5px;
`;

const MetaWrapper = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 1.25rem;
`;

const OwnerImg = styled.img`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: center;
`;
const OwnerInfoWrapper = styled.div`
  > a {
    color: #1a2b48;
    font-weight: 600;
    font-size: 1rem;
  }
`;

const OwnerInfo = () => {
  return (
    <Wrapper>
      <Heading>Owner</Heading>
      <MetaWrapper>
        <OwnerImg src="https://remap.travelerwp.com/wp-content/uploads/bfi_thumb/people_8-1-389daflw671gzhmscawv7k.jpg" />
        <OwnerInfoWrapper>
          <a href="#">Travis Tan</a>
          <p>Member Since 2018</p>
        </OwnerInfoWrapper>
      </MetaWrapper>
    </Wrapper>
  );
};

export default OwnerInfo;
