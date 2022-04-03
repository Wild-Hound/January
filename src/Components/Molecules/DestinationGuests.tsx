import React, { useState } from "react";
import styled from "styled-components";
import { BsPeople } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Dropdown, Menu } from "antd";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* border-right: 1px solid #ccc; */
  cursor: pointer;
`;

const Icon = styled.div`
  color: #999;
  font-size: 1.5rem;
`;
const Meta = styled.div`
  > p {
    color: #999;
  }
`;
const DestinationText = styled.p`
  color: #27ae60 !important;
`;

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  > span {
    color: #666;
    font-size: 1rem;
  }
`;
const IncrementWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  > button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }
  > div {
    font-size: 1.15rem;
    color: #27ae60 !important;
  }
`;

interface Props {
  selectedAdults: number;
  setSelectedAdults: React.Dispatch<React.SetStateAction<number>>;
  selectedChildern: number;
  setSelectedChildern: React.Dispatch<React.SetStateAction<number>>;
}
const DestinationGuests: React.FC<Props> = ({
  selectedAdults,
  setSelectedAdults,
  selectedChildern,
  setSelectedChildern,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <SelectorWrapper>
          <span>Adults</span>
          <IncrementWrapper>
            <button
              onClick={() => {
                if (selectedAdults === 0) {
                  return;
                }
                setSelectedAdults(selectedAdults - 1);
              }}
            >
              <AiOutlineMinus />
            </button>
            <div>{selectedAdults}</div>
            <button
              onClick={() => {
                if (selectedAdults === 10) {
                  return;
                }
                setSelectedAdults(selectedAdults + 1);
              }}
            >
              <AiOutlinePlus />
            </button>
          </IncrementWrapper>
        </SelectorWrapper>
      </Menu.Item>
      <Menu.Item>
        <SelectorWrapper>
          <span>Childern</span>
          <IncrementWrapper>
            <button
              onClick={() => {
                if (selectedChildern === 0) {
                  return;
                }
                setSelectedChildern(selectedChildern - 1);
              }}
            >
              <AiOutlineMinus />
            </button>
            <div>{selectedChildern}</div>
            <button
              onClick={() => {
                if (selectedChildern === 10) {
                  return;
                }
                setSelectedChildern(selectedChildern + 1);
              }}
            >
              <AiOutlinePlus />
            </button>
          </IncrementWrapper>
        </SelectorWrapper>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} visible={showDropDown}>
      <Wrapper onClick={() => setShowDropDown(!showDropDown)}>
        <Icon>
          <BsPeople />
        </Icon>
        <Meta>
          <p>Guests</p>
          <DestinationText>4 Adults - 4 Children</DestinationText>
        </Meta>
      </Wrapper>
    </Dropdown>
  );
};

export default DestinationGuests;
