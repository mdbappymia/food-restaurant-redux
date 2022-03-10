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

export const fetchAllCategory = () => {
  return (dispatch) => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => dispatch(getAllCategory(data.meals)));
  };
};

export const fetchFoodsByCategory = (category) => {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => res.json())
      .then((data) => dispatch(getFoodsByCategory(data.meals)));
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
export const getAllCategory = (payload) => {
  return {
    type: "GET_ALL_CATEGORY",
    payload,
  };
};

export const setCategoryName = (payload) => {
  return {
    type: "SET_CATEGORY_NAME",
    payload,
  };
};

export const getFoodsByCategory = (payload) => {
  return {
    type: "GET_FOODS_BY_CATEGORY",
    payload,
  };
};
