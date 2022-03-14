const initialState = {
  meals: [],
  cartMeal: JSON.parse(localStorage.getItem("cart")) || [],
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
      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cartMeal, action.payload])
      );
      return {
        ...state,
        cartMeal: [...state.cartMeal, action.payload],
      };
    }
    case "REMOVE_TO_CART": {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...state.cartMeal.filter((item) => item.idMeal !== action.payload),
        ])
      );
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
      localStorage.setItem(
        "cart",
        JSON.stringify([...newCartAfterIncreseItem])
      );
      return {
        ...state,
        cartMeal: newCartAfterIncreseItem,
      };
    }
    case "ITEM_DECREASE": {
      const newCartAfterDecreseItem = [];
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
        newCartAfterDecreseItem.push(item);
      }
      localStorage.setItem(
        "cart",
        JSON.stringify([...newCartAfterDecreseItem])
      );
      return {
        ...state,
        cartMeal: newCartAfterDecreseItem,
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
