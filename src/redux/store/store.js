import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import shopReducer from "../reducers/shopReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  userData: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
