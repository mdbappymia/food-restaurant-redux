export const setUser = (payload) => {
  return {
    type: "SET_USER_TO_STATE",
    payload,
  };
};

export const setIsLoading = (payload) => {
  return {
    type: "SET_IS_LOADIN",
    payload,
  };
};
