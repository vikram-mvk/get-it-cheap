import React from "react";
import styled from "styled-components";

const Input = ({
  name,
  type,
  labelName,
  changeHandler,
  handleShowPassword,
}) => {
  return (
    <InputField>
      <input
        type={type}
        name={name}
        data-label={labelName}
        onChange={changeHandler}
      />
      <label htmlFor={name}>{name}</label>
    </InputField>
  );
};

const InputField = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: 1em 0.5em;
    font-size: var(--lengthMd1);
    outline-color: var(--colorText);
    &:focus {
      outline-color: var(--colorPrimary);
    }
    &:focus + label {
      top: -0.6em;
      background: #fff;
    }
    &.not-empty + label {
      top: -0.6em;
      background: #fff;
    }
  }
  label {
    position: absolute;
    padding: 0 0.2em;
    left: 0.5em;
    top: 1.125em;
    font-size: var(--lengthMd1);
    background: #fff;
    transition: all ease-in-out 200ms;
    &.no-error {
      top: -0.6em;
      background: var(--colorBg);
    }
  }
`;

export default Input;
