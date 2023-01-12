import { DECREMENT, INCREMENT } from './actions';

export const counterReducer = function (state = { count: 2 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + (action.payload || 1) };
    case DECREMENT:
      return { count: state.count - (action.payload || 1) };
    default:
      return { count: state.count };
  }
};
