import * as types from "../action/types";

const initialState = {
  todos: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.Add_Todos:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};