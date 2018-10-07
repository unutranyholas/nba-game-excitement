import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {connect} from "react-redux";
import {fetchGames, initCalculation} from "../actions";
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
  fetchGames = () => {
    this.props.fetchGames({date: this.props.date});
  };

  initCalculation = (gameId) => {
    this.props.initCalculation({date: this.props.date, gameId});
  };

  componentDidMount() {
    const {loadedDates, date} = this.props;
    if (!loadedDates.some(loadedDate => loadedDate === date)) {
      this.fetchGames();
    }
  }

  componentDidUpdate(prevProps) {
    const {date, gamesToUpdate, liveGames} = this.props;
    if (prevProps.date !== date) {
      this.fetchGames();
    }
    if (gamesToUpdate.length > 0) {
      this.initCalculation(gamesToUpdate[0]);
    }

    if (gamesToUpdate.length === 0 && liveGames.length > 0) {
      setTimeout(() => {
        liveGames.forEach(liveGame => {
          this.initCalculation(liveGame);
        });
      }, 120000);
    }
  }

  render() {
    const {games, gamesToUpdate, liveGames, date} = this.props;
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
                  live={liveGames.some(liveGame => liveGame === gameId)}
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
    gamesToUpdate,
    liveGames,
    date: ownProps.match.params.date || today,
  }),
  {fetchGames, initCalculation},
)(ScheduleComponent);