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

export const saveGames = (payload) => ({
  type: "SAVE_GAMES",
  date: payload.date,
  games: payload.games.reduce(
    (acc, {gameId, ...rest}) => ({...acc, [gameId]: rest}),
    {},
  ),
});

const serverUrl = "http://localhost:5000";
// const serverUrl = "https://nba-game-excitement.herokuapp.com";

const fetchGameById = async (gameId) => {
  const response = await fetch(`${serverUrl}/games/${gameId}/load`);
  return response.json();
};

const fetchGamesByDate = async (date) => {
  const response = await fetch(`${serverUrl}/dates/${date}`);
  return response.json();
};

