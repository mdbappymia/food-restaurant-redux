import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import shopReducer from "../reducers/shopReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
