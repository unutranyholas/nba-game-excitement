import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {connect} from "react-redux";
import {fetchGames} from "../actions";
import {getGameIds} from "../data/games";
import {getSeasonStageName} from "../data/games.js";
import {SeasonStage, DateHeader, ScheduleContainer, NavContainer, GamesContainer, DateHeaderContainer} from "./Basic";
import {GamePreview} from "./GamePreview";
import {LoadButton} from "./LoadButton";
import {Nav} from "./Nav";

const inputDate = "%Y%m%d";
const outputDate = "%b %d, %Y";
const parseUrlTime = timeParse(inputDate);
export const formatUrlTime = timeFormat(inputDate);
const formatTime = timeFormat(outputDate);

class ScheduleComponent extends React.PureComponent {
  componentDidMount() {
    const {loaded, match, fetchGames} = this.props;
    if (!loaded.some(date => date === match.params.date)) {
      fetchGames({date: match.params.date});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.date !== this.props.match.params.date) {
      this.props.fetchGames({date: this.props.match.params.date});
    }
  }

  render() {
    const {match, games} = this.props;
    const date = match.params.date
      ? parseUrlTime(match.params.date)
      : new Date();

    const gameIds = getGameIds(formatUrlTime(date));

    return (
      <ScheduleContainer>
        <NavContainer>
          <DateHeaderContainer>
            <SeasonStage>{getSeasonStageName(formatUrlTime(date))}</SeasonStage>
            <DateHeader>{formatTime(date)}</DateHeader>
          </DateHeaderContainer>
          <Nav date={formatUrlTime(date)} />
        </NavContainer>
        <GamesContainer>
          {
            gameIds.length > 0
              ? gameIds.map((gameId) => games[gameId] ?
              <GamePreview data={games[gameId]} key={gameId} gameId={gameId} /> : null)
              : (<div>No games on this day</div>)
          }
        </GamesContainer>
      </ScheduleContainer>
    );
  }
}

export const Schedule = connect(({games, loaded}) => ({games, loaded}), {fetchGames})(ScheduleComponent);