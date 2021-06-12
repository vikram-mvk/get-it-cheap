import { GETITEMS, CREATEITEM, GETUSERITEMS } from "../constants/actionTypes";

const initState = {
  allItems: [],
  searchedItems: [],
  userItems: [],
};

const items = (state = initState, action) => {
  switch (action.type) {
    case GETITEMS:
      return {
        ...state,
        ...action.payload,
      };
    case CREATEITEM:
      return {
        ...state,
        ...action.payload,
      };
    case GETUSERITEMS:
      return {
        ...state,
        userItems: action.payload,
      };
    default:
      return { ...state };
  }
};

export default items;
