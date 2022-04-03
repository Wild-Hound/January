import React from "react";
import styled from "styled-components";
import DestinationLocation from "../Molecules/DestinationLocation";
import { DatePicker, Select, Space } from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

const Wrapper = styled.div`
  background-color: white;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 0 !important;
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
  function onChange(value: string) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: string) {
    console.log("search:", val);
  }
  return (
    <Wrapper>
      <DestinationLocation />
      <RangePicker />
      <DestinationSearch>Search</DestinationSearch>
    </Wrapper>
  );
};

export default DestinationSelector;
