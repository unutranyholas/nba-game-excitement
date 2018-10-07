import {combineReducers} from "redux";

export const games = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_GAMES":
      return {...state, ...action.games};
    default:
      return state;
  }
};

export const loaded = (state = [], action) => {
  switch (action.type) {
    case "SAVE_GAMES":
      return [...state, action.date];
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  games,
  loaded,
});