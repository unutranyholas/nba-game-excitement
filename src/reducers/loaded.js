export const loaded = (state = [], action) => {
  switch (action.type) {
    case "SAVE_GAMES":
      return [...state, action.date];
    default:
      return state;
  }
};
