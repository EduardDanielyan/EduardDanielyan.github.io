import { combineReducers } from "redux";
import { logReducer } from "./Gym/reducer";

export default combineReducers({
    logState: logReducer
})