import { DECREMENT, INCREMENT } from '../redux/actions';

export const counterReducer = (state = { count: 10 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.value };
    case DECREMENT:
      return { count: state.count - action.value };
    default:
      return state;
  }
};
