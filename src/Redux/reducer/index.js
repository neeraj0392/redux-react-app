const INIT_STATE = 0;

export const accountBalanceReducer = (state = INIT_STATE, action) => {
  if (action.type == "Withdraw") {
    return state - action.payload;
  }

  if (action.type == "Deposit") {
    return state + action.payload;
  }

  return state;
};
