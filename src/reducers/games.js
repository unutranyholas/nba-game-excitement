export const games = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_GAMES":
      return {...state, ...action.games};
    default:
      return state;
  }
};
