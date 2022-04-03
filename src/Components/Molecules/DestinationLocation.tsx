import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { Dropdown, Menu } from "antd";
import { destinations } from "../../Resources/fakeData";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* border-right: 1px solid #ccc; */
  cursor: pointer;
`;

const Icon = styled.div<{ fontSize: string }>`
  color: #999;
  font-size: ${({ fontSize }) => fontSize};
`;
const Meta = styled.div`
  > p {
    color: #999;
  }
`;
const DestinationText = styled.p`
  color: #27ae60 !important;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  gap: 0.5rem;
  > span {
    margin-top: -5px;
  }
`;

interface Props {
  selectedDestination: string;
  setSelectedDestination: React.Dispatch<React.SetStateAction<string>>;
}
const DestinationLocation: React.FC<Props> = ({
  selectedDestination,
  setSelectedDestination,
}) => {
  const menu = (
    <Menu>
      {destinations.map((dest, index) => {
        return (
          <Menu.Item key={index} onClick={() => setSelectedDestination(dest)}>
            <MenuWrapper>
              {" "}
              <Icon fontSize="1rem">
                <GoLocation />
              </Icon>{" "}
              <span>{dest}</span>
            </MenuWrapper>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Wrapper>
        <Icon fontSize="1.5rem">
          <GoLocation />
        </Icon>
        <Meta>
          <p>Destination</p>
          <DestinationText>{selectedDestination}</DestinationText>
        </Meta>
      </Wrapper>
    </Dropdown>
  );
};

export default DestinationLocation;
