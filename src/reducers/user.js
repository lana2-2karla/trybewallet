import setLogin from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case setLogin:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return {
      state,
    };
  }
};
export default userReducer;
