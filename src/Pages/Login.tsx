import React, { useState } from "react";
import styled from "styled-components";
import LoginX from "../Components/Sections/LoginPage/LoginX";
import Signup from "../Components/Sections/LoginPage/Signup";
import bgImg from "../Resources/buildingBG.jpg";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
`;

const CoverDiv = styled.div`
  width: 100%;
  min-height: 100%;
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const CredDiv = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f7f1e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
`;
const CardHeading = styled.h2`
  padding: 1rem 1.5rem;
  text-align: center;
`;
const SlotWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const SlotButton = styled.button<{ active?: boolean }>`
  background-color: transparent;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 2.5rem;
  width: 100%;
  min-width: fit-content;
  ${({ active }) => (active ? "border-bottom: 2px solid #34ace0;" : "")}
`;

const Login = () => {
  const [activeSlot, setActiveSlot] = useState(0);

  return (
    <Wrapper>
      <CoverDiv />
      <CredDiv>
        <Card>
          <CardHeading>Login</CardHeading>
          <SlotWrapper>
            <SlotButton
              active={activeSlot === 0}
              onClick={() => setActiveSlot(0)}
            >
              Login
            </SlotButton>
            <SlotButton
              active={activeSlot === 1}
              onClick={() => setActiveSlot(1)}
            >
              Sign up
            </SlotButton>
          </SlotWrapper>
          {activeSlot === 0 ? <LoginX /> : <Signup />}
        </Card>
      </CredDiv>
    </Wrapper>
  );
};

export default Login;
