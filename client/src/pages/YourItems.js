import React, { useEffect } from "react";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { getUserItems } from "../redux/actions/items";
const YourItems = () => {
  const dispatch = useDispatch();
  const { userItems } = useSelector((state) => state.items);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user.result._id || user.result.userId;
  console.log(userId);
  useEffect(() => {
    dispatch(getUserItems(userId));
  }, [dispatch, userId]);
  console.log(userItems);
  return (
    <div className="container">
      <h2>Your Items</h2>
      <Items items={userItems} />
    </div>
  );
};

export default YourItems;
