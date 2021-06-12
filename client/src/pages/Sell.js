import React from "react";
import styled from "styled-components";
import Form from "../components/Form";
import NotAuth from "../components/NotAuth";
const Sell = () => {
  const option = "Sale";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user?.result?.name) {
    return <NotAuth option={option} />;
  }
  return (
    <div className="container">
      <Title>
        <span>Sell your Item</span>
      </Title>
      <Form option={option} />
    </div>
  );
};

const Title = styled.h2`
  font-size: var(--lengthLg1);
  text-align: center;
  margin-top: 1em;
  span {
    background: linear-gradient(180deg, transparent 70%, #c090ff 50%);
  }
`;
export default Sell;
