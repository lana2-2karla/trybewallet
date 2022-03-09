export const SET_LOGIN = 'SET_LOGIN';
const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});

export const SET_EXPENSES = 'SET_EXPENSES';
export const setExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});
export default setLogin;

export const SET_CURRENCIES = 'SET_CURRENCIES';
export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});
