import {combineReducers} from "redux";
import {games} from "./games";
import {loaded} from "./loaded";

export const rootReducer = combineReducers({
  games,
  loaded,
});