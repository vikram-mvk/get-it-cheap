import React from "react";
import styled from "styled-components";
const Search = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="container">
      <StyledSearch>
        <input type="text" onChange={changeHandler} name="Search" />
        <button>Search</button>
      </StyledSearch>
    </div>
  );
};

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  input {
    font-size: var(--lengthMd3);
    min-width: 500px;
    padding: 0.4em;
    border: 1px solid rgb(238, 238, 238);
    height: 3rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--lengthMd3);
    padding: 0.4em;
    min-width: 130px;
    border: 0;
    outline: 0;
    background: var(--colorPrimary);
    color: #fff;
    cursor: pointer;
    height: 3rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: background 200ms ease-in-out;
    &:hover {
      background: #690df3;
    }
  }
`;

export default Search;
