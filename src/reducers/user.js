import { SET_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};
export default userReducer;
