import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import MainBlockReducer from "./MainBlockReducer";

let reducers = combineReducers ({
    mainBlockPage: MainBlockReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.__store__ = store

export default store