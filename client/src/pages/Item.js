import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../redux/actions/details";
import Loader from "../components/Loader";
const Item = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.details);
  let itemId;
  if (location.pathname.includes("/items/")) {
    const string = location.pathname.split("/");
    itemId = string[string.length - 1];
  }
  useEffect(() => {
    dispatch(getItem(itemId));
  }, [dispatch, itemId]);
  console.log(data);
  return (
    <div className="container">
      {data ? (
        <>
          <h2>{data.title}</h2>
          <p>{data.username}</p>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Item;
