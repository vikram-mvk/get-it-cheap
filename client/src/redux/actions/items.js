import { CREATEITEM, GETITEMS, GETUSERITEMS } from "../constants/actionTypes";
import { createItem, fetchItems, fetchUserItems } from "../../api";

//Get All Item
export const getItems = () => async (dispatch) => {
  try {
    const { data } = await fetchItems();
    dispatch({
      type: GETITEMS,
      payload: {
        allItems: data,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

//Create Item
export const addItem = (item) => async (dispatch) => {
  try {
    const { data } = await createItem(item);
    console.log(data);
    dispatch({
      type: CREATEITEM,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getUserItems = (userId) => async (dispatch) => {
  try {
    const { data } = await fetchUserItems(userId);
    console.log(data);
    dispatch({
      type: GETUSERITEMS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
