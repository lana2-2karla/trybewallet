import { SET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};
export default walletReducer;
