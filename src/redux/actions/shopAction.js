export const fetchShopData = (searchValue) => {
  return (dispatch) => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${
        searchValue || "a"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(getShopData(data));
      });
  };
};

const getShopData = (payload) => {
  return {
    type: "GET_SHOP_DATA",
    payload,
  };
};
export const addMealToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};
export const removeMealToCart = (payload) => {
  return {
    type: "REMOVE_TO_CART",
    payload,
  };
};
export const increaseItem = (payload) => {
  return {
    type: "ITEM_INCREASE",
    payload,
  };
};
export const decreaseItem = (payload) => {
  return {
    type: "ITEM_DECREASE",
    payload,
  };
};
export const searchMealText = (payload) => {
  return {
    type: "SET_SEARCH_TEXT",
    payload,
  };
};
