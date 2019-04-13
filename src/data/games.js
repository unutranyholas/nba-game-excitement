export const getPrevNextDays = ({date, allDates}) => {
  const reversedGamesCount = allDates.slice().reverse();
  const prevDayIndex = reversedGamesCount.findIndex(
    (game) => date > game.date,
  );
  const nextDayIndex = allDates.findIndex(
    (game) => date < game.date,
  );
  return {
    nextDay: nextDayIndex >= 0 ? allDates[nextDayIndex].date : null,
    prevDay: prevDayIndex >= 0 ? reversedGamesCount[prevDayIndex].date : null,
  };
};

const gameStages = ["Preseason", "Regular season", "All-star games", "Playoffs"];

export const getSeasonStageName = (date, allDates) => {
  if (!allDates) {
    return "";
  }
  const gameDay = allDates.find(gameDay => gameDay.date === date);
  return gameDay
    ? gameStages[gameDay.seasonstageid - 1]
    : "";
};

export const getGameIds = (date, allDates) => {
  if (!allDates) {
    return [];
  }
  const gameDay = allDates.find(gameDay => gameDay.date === date);
  return gameDay
    ? gameDay.gameids
    : [];
};
