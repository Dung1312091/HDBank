import { FAILURE, LOAD_DATA_SUCCESS } from "../../constants/actionTypes";

export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
};
const homeReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data }
      };
    default:
      return state;
  }
};

export default homeReducer;
