import React, { useState } from "react";
import styled from "styled-components";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/items";

const Form = ({ option }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState({
    itemName: "",
    cost: "",
    model: "",
    option: option,
    desc: "",
    files: [],
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });
  const images = [];
  const user = JSON.parse(localStorage.getItem("profile"));
  const setFiles = (files) => {
    files.forEach((file) => {
      console.log(file);
      let { base64 } = file;
      images.push(base64);
      setItemData({ ...itemData, files: images });
    });
  };
  const clear = () => {
    setItemData({
      itemName: "",
      cost: "",
      model: "",
      option: option,
      desc: "",
      files: [],
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    e.target.innerHTML = "Adding Item..";
    const {
      itemName,
      cost,
      model,
      option,
      desc,
      files,
      phone,
      address,
      city,
      state,
      country,
    } = itemData;

    if (
      itemName !== "" &&
      cost !== "" &&
      model !== "" &&
      option !== "" &&
      desc !== "" &&
      files !== "" &&
      phone !== "" &&
      address !== "" &&
      city !== "" &&
      state !== "" &&
      country !== ""
    ) {
      console.log(user.result.name);
      setItemData({ ...itemData, username: user.result.name });
      dispatch(addItem(itemData));
      console.log(itemData);
    }
    clear();
    history.push("/");
  };

  if (!user?.result?.name) {
    return (
      <div className="container">
        <h2>Please Signin to create an item.</h2>
      </div>
    );
  }
  return (
    <StyledForm>
      <h2>Item Details</h2>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InputWrapper>
            <label htmlFor="title">Item Name</label>
            <input
              type="text"
              className="title"
              name="title"
              placeholder="Name of your item"
              value={itemData.itemName}
              onChange={(e) =>
                setItemData({ ...itemData, itemName: e.target.value })
              }
            />
          </InputWrapper>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InputWrapper>
            <label htmlFor="cost">Cost </label>
            <input
              type="text"
              className="cost"
              name="cost"
              placeholder="Amount in $"
              value={itemData.cost}
              onChange={(e) =>
                setItemData({ ...itemData, cost: e.target.value })
              }
            />
          </InputWrapper>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InputWrapper>
            <label htmlFor="option">Model</label>
            <input
              type="text"
              className="option"
              name="option"
              placeholder="Model Year / Age"
              value={itemData.model}
              onChange={(e) =>
                setItemData({ ...itemData, model: e.target.value })
              }
            />
          </InputWrapper>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <InputWrapper>
            <label htmlFor="desc">Description</label>
            <textarea
              className="desc"
              name="desc"
              value={itemData.desc}
              placeholder="Give a small description about the item"
              onChange={(e) =>
                setItemData({ ...itemData, desc: e.target.value })
              }
            />
          </InputWrapper>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InputWrapper>
            <label htmlFor="images">Upload the Images</label>
            <FileBase
              type="file"
              multiple={true}
              onDone={(file) => setFiles(file)}
              className="images"
              name="images"
            ></FileBase>
          </InputWrapper>
        </div>
      </div>
      <h2>Contact Details</h2>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <InputWrapper>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="phone"
              className="phone"
              name="phone"
              value={itemData.phone}
              onChange={(e) =>
                setItemData({ ...itemData, phone: e.target.value })
              }
            />
          </InputWrapper>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12"></div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <InputWrapper>
            <label htmlFor="address">Address</label>
            <textarea
              className="address"
              name="address"
              value={itemData.address}
              onChange={(e) =>
                setItemData({ ...itemData, address: e.target.value })
              }
            />
          </InputWrapper>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InputWrapper>
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="city"
              name="city"
              value={itemData.city}
              onChange={(e) =>
                setItemData({ ...itemData, city: e.target.value })
              }
            />
          </InputWrapper>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InputWrapper>
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="state"
              name="state"
              value={itemData.state}
              onChange={(e) =>
                setItemData({ ...itemData, state: e.target.value })
              }
            />
          </InputWrapper>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InputWrapper>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="country"
              name="county"
              value={itemData.country}
              onChange={(e) =>
                setItemData({ ...itemData, country: e.target.value })
              }
            />
          </InputWrapper>
        </div>
      </div>
      <FormCta>
        <PButton onClick={submitHandler}>Add Item</PButton>
        <SButton>Cancel</SButton>
      </FormCta>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 0 1em;
  h2 {
    margin-top: 2em;
  }
`;
const InputWrapper = styled.div`
  margin-top: 1.5em;
  label {
    font-size: var(--lengthMd2);
    display: block;
    margin-bottom: 0.25em;
  }
  input {
    display: block;
    font-size: var(--lengthMd2);
    padding: 0.5em;
    width: 100%;
    &::placeholder {
      color: #b4b4b4;
    }
  }
  .images {
    padding: 0;
  }
  textarea {
    max-width: 100%;
    min-width: 100%;
    min-height: 10rem;
    padding: 0.5em;
    height: var(--lengthLg3);
    font-size: var(--lengthMd2);
    &::placeholder {
      color: #b4b4b4;
    }
  }
`;
const FormCta = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;
`;
const PButton = styled.button`
  font-size: var(--lengthMd1);
  font-weight: 500;
  padding: 0.5em 1.5em;
  background: var(--colorPrimary);
  margin-right: 1em;
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  transition: background 300ms ease-in-out;
  &:hover {
    background: #690df3;
  }
`;
const SButton = styled.a`
  font-size: var(--lengthMd1);
  color: var(--colorLabel);
  cursor: pointer;
`;
export default Form;
