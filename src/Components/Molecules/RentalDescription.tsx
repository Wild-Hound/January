import React from "react";
import styled from "styled-components";
import { recommendedHousehouse } from "../../Lib/Types";

const Image = styled.img`
  min-width: 100%;
  max-width: 100%;
  max-height: 555px;
  object-fit: cover;
  object-position: center;
  margin-top: 1.25rem;
`;

const Description = styled.div`
  margin-top: 1rem;
  > h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  > p {
    font-size: 1rem;
  }
`;

interface Props {
  rentalData: recommendedHousehouse | undefined;
}
const RentalDescription: React.FC<Props> = ({ rentalData }) => {
  return (
    <div>
      <Image src={rentalData?.img} />
      <Description>
        <h2>Description</h2>
        <p>{rentalData?.description}</p>
      </Description>
    </div>
  );
};

export default RentalDescription;
