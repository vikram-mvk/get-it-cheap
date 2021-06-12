import { GETITEM } from "../constants/actionTypes";

const details = (state, action) => {
  switch (action.type) {
    case GETITEM:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default details;
