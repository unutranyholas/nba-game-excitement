import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {connect} from "react-redux";
import {fetchGames, updateGame, startUpdating} from "../actions";
import {getGameIds} from "../data/games";
import {getSeasonStageName} from "../data/games.js";
import {DateHeader, DateHeaderContainer, GamesContainer, NavContainer, ScheduleContainer, SeasonStage} from "./Basic";
import {GamePreview, GamePreviewLoader} from "./GamePreview";
import {Nav} from "./Nav";

const inputDate = "%Y%m%d";
const outputDate = "%b %d, %Y";
const parseUrlTime = timeParse(inputDate);
export const formatUrlTime = timeFormat(inputDate);
const formatTime = timeFormat(outputDate);
const today = formatUrlTime(new Date());

class ScheduleComponent extends React.PureComponent {
  updateInterval = null;

  updateGames = () => {
    const {games, gamesToUpdate, updateGame, startUpdating} = this.props;

    const newGamesToUpdate = Object.entries(games)
      .filter(([gameId, {gameData}]) => {
        return new Date() > new Date(gameData.startTimeUTC) && gameData.statusNum === 1;
      })
      .map(([gameId]) => gameId);

    if (newGamesToUpdate.length > 0) {
      startUpdating({games: newGamesToUpdate});
    }

    if (gamesToUpdate.length > 0) {
      gamesToUpdate.forEach(gameId => {
        updateGame({gameId});
      });
    }
  };

  componentDidMount() {
    const {loadedDates, date, fetchGames} = this.props;
    if (!loadedDates.some(loadedDate => loadedDate === date)) {
      fetchGames({date});
    }
    this.updateInterval = setInterval(this.updateGames, 120000);
  }

  componentDidUpdate(prevProps) {
    const {date, fetchGames, loadedDates} = this.props;
    if (prevProps.date !== date && !loadedDates.some(loadedDate => loadedDate === date)) {
      fetchGames({date});
    }
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {
    const {games, gamesToUpdate, date} = this.props;
    const parsedDate = parseUrlTime(date);
    const gameIds = getGameIds(date);

    return (
      <ScheduleContainer>
        <NavContainer>
          <DateHeaderContainer>
            <SeasonStage>{getSeasonStageName(date)}</SeasonStage>
            <DateHeader>{formatTime(parsedDate)}</DateHeader>
          </DateHeaderContainer>
          <Nav date={date} today={today} />
        </NavContainer>
        <GamesContainer>
          {
            gameIds.length > 0
              ? gameIds.map(
              (gameId) => games[gameId]
                ? <GamePreview
                  data={games[gameId]}
                  key={gameId}
                  gameId={gameId}
                  needUpdate={gamesToUpdate.some(gameToUpdate => gameToUpdate === gameId)}
                />
                : <GamePreviewLoader key={gameId} />,
              )
              : (<div>No games on this day</div>)
          }
        </GamesContainer>
      </ScheduleContainer>
    );
  }
}

export const Schedule = connect(
  ({games, loadedDates, gamesToUpdate, liveGames}, ownProps) => ({
    games,
    loadedDates,
    gamesToUpdate, //TODO: filter games only from current date
    liveGames,
    date: ownProps.match.params.date || today,
  }),
  {fetchGames, updateGame, startUpdating},
)(ScheduleComponent);