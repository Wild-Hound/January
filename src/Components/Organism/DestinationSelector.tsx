import React, { useState } from "react";
import styled from "styled-components";
import DestinationLocation from "../Molecules/DestinationLocation";
import { DatePicker, Select, Space } from "antd";
import DestinationGuests from "../Molecules/DestinationGuests";

const { RangePicker } = DatePicker;
const { Option } = Select;

const Wrapper = styled.div`
  background-color: white;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 0 !important;
  border: 1px solid #ccc;
`;

const DestinationSearch = styled.button`
  background-color: #27ae60;
  padding: 0 2rem;
  font-size: 1.15rem;
  font-family: Roboto Slab;
  font-weight: bold;
  color: white;
`;
const SelectDestination = styled(Select)`
  padding: 1rem 0.5rem;
`;

const DestinationSelector = () => {
  const [selectedDestination, setSelectedDestination] = useState("New York");

  return (
    <Wrapper>
      <DestinationLocation
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
      />
      <RangePicker />
      <DestinationGuests />
      <DestinationSearch>Search</DestinationSearch>
    </Wrapper>
  );
};

export default DestinationSelector;
