const initialState = {
  user: {},
  isLoading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TO_STATE": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_IS_LOADIN": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
