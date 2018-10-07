export const fetchGames = (payload) => {
  return async (dispatch) => {
    try {
      const games = await fetchGamesByDate(payload.date);
      dispatch(saveGames({games, date: payload.date}));
    } catch (ex) {
      console.log(ex);
      // dispatch(showError(ex));
    }
  };
};

export const initCalculation = (payload) => {
  return async (dispatch) => {
    try {
      const game = await updateGame(payload.date, payload.gameId);
      console.log(game);
      dispatch(saveUpdatedGame({game, date: payload.date}));
    } catch (ex) {
      console.log(ex);
      // dispatch(showError(ex));
    }
  };
};

export const saveGames = (payload) => ({
  type: "SAVE_GAMES",
  ...payload,
});

export const saveUpdatedGame = (payload) => ({
  type: "UPDATE_GAME",
  ...payload,
});

// const serverUrl = "http://localhost:5000";
const serverUrl = "https://nba-game-excitement.herokuapp.com";

const updateGame = async (date, gameId) => {
  const response = await fetch(`${serverUrl}/calc/${date}/${gameId}`);
  return response.json();
};

const fetchGamesByDate = async (date) => {
  const response = await fetch(`${serverUrl}/dates/${date}`);
  return response.json();
};

