const initialState = {
  meals: [],
  cartMeal: [],
  searchText: "",
  categories: [],
  categoryName: "beef",
  categoryFoods: [],
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SHOP_DATA": {
      return {
        ...state,
        meals: action.payload.meals,
      };
    }
    case "ADD_TO_CART": {
      if (
        state.cartMeal.find((item) => item.idMeal === action.payload.idMeal)
      ) {
        return state;
      }
      return {
        ...state,
        cartMeal: [...state.cartMeal, action.payload],
      };
    }
    case "REMOVE_TO_CART": {
      return {
        ...state,
        cartMeal: state.cartMeal.filter(
          (item) => item.idMeal !== action.payload
        ),
      };
    }
    case "ITEM_INCREASE": {
      const newCartAfterIncreseItem = [];
      for (let item of state.cartMeal) {
        if (item.idMeal === action.payload) {
          item.item++;
        }
        newCartAfterIncreseItem.push(item);
      }
      return {
        ...state,
        cartMeal: newCartAfterIncreseItem,
      };
    }
    case "ITEM_DECREASE": {
      const newCartAfterIncreseItem = [];
      for (let item of state.cartMeal) {
        if (item.idMeal === action.payload) {
          if (item.item === 1) {
            return {
              ...state,
              cartMeal: state.cartMeal.filter(
                (item) => item.idMeal !== action.payload
              ),
            };
          }
          item.item--;
        }
        newCartAfterIncreseItem.push(item);
      }

      return {
        ...state,
        cartMeal: newCartAfterIncreseItem,
      };
    }
    case "SET_SEARCH_TEXT": {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    case "GET_ALL_CATEGORY": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "SET_CATEGORY_NAME": {
      return {
        ...state,
        categoryName: action.payload,
      };
    }
    case "GET_FOODS_BY_CATEGORY": {
      return {
        ...state,
        categoryFoods: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default shopReducer;
