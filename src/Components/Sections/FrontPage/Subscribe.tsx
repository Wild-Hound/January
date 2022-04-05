import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #eaeaea;
  padding: 5rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  max-width: fit-content;
  margin: auto;
  align-items: center;
  gap: 1rem;
`;

const Heading = styled.div`
  > h3 {
    color: #5e6d77;
  }
`;

const InputWrapper = styled.div`
  display: flex;
`;
const EmailInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  margin-left: 5rem;
  width: 250px;
  :focus {
    border: 1px solid #27ae60;
    outline: none;
  }
`;
const SubmitButton = styled.button`
  background-color: #27ae60;
  font-weight: bold;
  color: white;
  padding: 1rem 2rem;
`;

const Subscribe = () => {
  return (
    <Background>
      <Wrapper>
        <Heading>
          <h1>Get Updates & More</h1>
          <h3>Thoughtful thoughts to your inbox</h3>
        </Heading>
        <InputWrapper>
          <EmailInput type="email" placeholder="Enter your email" />
          <SubmitButton>Submit</SubmitButton>
        </InputWrapper>
      </Wrapper>
    </Background>
  );
};

export default Subscribe;
