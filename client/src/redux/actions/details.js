import { GETITEM } from "../constants/actionTypes";
import { fetchItem } from "../../api";

export const getItem = (id) => async (dispatch) => {
  const item = await fetchItem(id);
  dispatch({
    type: GETITEM,
    payload: item,
  });
};
