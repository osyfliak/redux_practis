import { todoTypes } from "./todo-types";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case todoTypes.add:
      return [...state, payload];
    case todoTypes.remove:
      const todoIndex = state.findIndex((item) => item.id === payload);
      const current = [...state];
      current.splice(todoIndex, 1);
      // console.log(test);
      return current;
    default:
      return state;
  }
};
