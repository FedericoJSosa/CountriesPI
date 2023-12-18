import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";


const store= createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;