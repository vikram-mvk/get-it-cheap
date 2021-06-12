import React from "react";
import styled from "styled-components";
const NotAuth = ({ option }) => {
  return (
    <div className="container">
      <StyledNotAuth>
        <h2>Please Sign In to {option} your item.</h2>
      </StyledNotAuth>
    </div>
  );
};

const StyledNotAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default NotAuth;
