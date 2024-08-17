import { createStore } from "redux";
import colorReducer from "./Reducer";

const store = createStore(colorReducer);

export default store;
