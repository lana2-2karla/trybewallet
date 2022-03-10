import { SET_CURRENCIES, SET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, action.payload],
    };
  default:
    return state;
  }
};
export default wallet;
