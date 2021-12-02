import { combineReducers } from "redux";
import blogReducer from "./modules/Blog/reducers";

const rootReducer = combineReducers({blogReducer})

export default rootReducer