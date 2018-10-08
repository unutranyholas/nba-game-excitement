import {combineReducers} from "redux";

export const games = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_GAMES":
      return {
        ...state, ...action.games.reduce(
          (acc, {gameId, ...rest}) => ({...acc, [gameId]: rest}),
          {},
        ),
      };
    case "UPDATE_GAME":
      const {gameId, ...rest} = action.game;
      return {
        ...state, ...{[gameId]: rest},
      };
    default:
      return state;
  }
};

export const loadedDates = (state = [], action) => {
  switch (action.type) {
    case "SAVE_GAMES":
      return [...state, action.date];
    default:
      return state;
  }
};

export const gamesToUpdate = (state = [], action) => {
  switch (action.type) {
    case "SAVE_GAMES":
      return [
        ...state, ...action.games
          .filter(({gameData}) => {
            return new Date() > new Date(gameData.startTimeUTC) && gameData.statusNum !== 3;
          })
          .map(({gameId}) => gameId),
      ];
    case "UPDATE_GAME":
      const {gameId, gameData: {statusNum}} = action.game;
      if (statusNum === 3) {
        return state.filter(gameToUpdateId => gameToUpdateId !== gameId);
      }
      return state;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  games,
  loadedDates,
  gamesToUpdate,
});