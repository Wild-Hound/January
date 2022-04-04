import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 3.5rem;
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
`;

const Section = styled.div`
  border-top: 1px solid #999;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  > p {
    font-weight: bold;
    font-size: 1.25rem;
  }
  > span {
    margin-top: 1rem;
  }
`;

const DestinationFooter = () => {
  return (
    <Wrapper>
      <Section>
        <p>20,000+ properties</p>
        <span>Morbi semper fames lobortis ac</span>
      </Section>
      <Section>
        <p>Trust & Safety</p>
        <span>Morbi semper fames lobortis ac</span>
      </Section>
      <Section>
        <p>Best Price Guarantee</p>
        <span>Morbi semper fames lobortis ac</span>
      </Section>
    </Wrapper>
  );
};

export default DestinationFooter;
