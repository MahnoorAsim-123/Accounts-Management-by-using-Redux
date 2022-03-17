import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducers";
import { createStore, applyMiddleware } from "redux";

const store = createStore( rootReducer , {} , applyMiddleware(thunk));

export default store;