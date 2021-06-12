import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h3>
        <span>
          <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 459 459">
            <g>
              <g id="filter">
                <path d="M178.5,382.5h102v-51h-102V382.5z M0,76.5v51h459v-51H0z M76.5,255h306v-51h-306V255z" />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </span>
        Filters
      </h3>
      <CheckWrap>
        <InputWrap>
          <input type="checkbox" id="rent" name="rent" value="rent" />
          <label htmlFor="rent">&nbsp; Rent</label>
        </InputWrap>
        <InputWrap>
          <input type="checkbox" id="buy" name="buy" value="buy" />
          <label htmlFor="buy">&nbsp; Buy</label>
        </InputWrap>
      </CheckWrap>
      <InputWrap>
        <label>Sort By</label>
        <select name="Order By" id="orderby">
          <option disabled value="true">
            Select Value
          </option>
          <option value="Price">Price</option>
          <option value="Model">Model</option>
        </select>
      </InputWrap>
      <InputWrap>
        <label>Order By</label>
        <select name="Order By" id="orderby">
          <option disabled value="true">
            Select Value
          </option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </InputWrap>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  border-right: 3px solid var(--colorLabel);
  border-top: 3px solid var(--colorLabel);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: 3px solid var(--colorLabel);
  padding: 1em 1.5em;
  background: #fff;
  height: max-content;
  position: sticky;
  top: 0;
  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    span {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5em;
    }
  }
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  label {
    font-size: var(--lengthMd1);
    margin-right: 1em;
  }
  select {
    font-size: var(--lengthMd1);
    cursor: pointer;
  }
`;
const CheckWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  input,
  label {
    cursor: pointer;
  }
`;
export default Sidebar;
