// action creator
export const withdraw = (amount) => {
  // Actual action
  return {
    type: "Withdraw",
    payload: amount,
  };
};

export const deposit = (amount) => {
  // Actual action
  return {
    type: "Deposit",
    payload: amount,
  };
};
