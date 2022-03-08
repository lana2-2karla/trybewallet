const INITIAL_STATE = {
  email: '',
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'setLogin':
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};
export default userReducer;
