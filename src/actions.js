export const getDefaultDate = () => {
  return async (dispatch) => {
    try {
      const {date} = await fetchClosestDate();
      dispatch(saveDefaultDate({date}));
    } catch (ex) {
      console.log(ex);
      // dispatch(showError(ex));
    }
  };
};

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

export const updateGame = (payload) => {
  return async (dispatch) => {
    try {
      const game = await fetchGameById(payload.gameId);
      dispatch(saveUpdatedGame({game}));
    } catch (ex) {
      console.log(ex);
      // dispatch(showError(ex));
    }
  };
};

export const saveDefaultDate = (payload) => ({
  type: "SAVE_DEFAULT_DATE",
  ...payload,
});

export const saveGames = (payload) => ({
  type: "SAVE_GAMES",
  ...payload,
});

export const saveUpdatedGame = (payload) => ({
  type: "UPDATE_GAME",
  ...payload,
});

export const startUpdating = (payload) => ({
  type: "START_UPDATING",
  ...payload,
});

export const toggleSpoiler = (payload) => ({
  type: "TOGGLE_SPOILER",
  ...payload,
});

export const unspoilAllGames = () => ({
  type: "UNSPOIL_ALL_GAMES",
});

// const serverUrl = "http://localhost:5000";
const serverUrl = "https://nba-game-excitement.herokuapp.com";

const fetchGameById = async (gameId) => {
  const response = await fetch(`${serverUrl}/games/${gameId}`);
  return response.json();
};

const fetchGamesByDate = async (date) => {
  const response = await fetch(`${serverUrl}/dates/${date}`);
  return response.json();
};

const fetchClosestDate = async () => {
  const response = await fetch(`${serverUrl}/redirect_to`);
  return response.json();
};
