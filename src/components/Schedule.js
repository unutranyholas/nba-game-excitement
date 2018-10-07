import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
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

export class Schedule extends React.PureComponent {

  render() {
    const {match} = this.props;
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
          <LoadButton date={match.params.date} />
          {
            gameIds.length > 0
              ? gameIds.map((gameId) => <GamePreview key={gameId} gameId={gameId} />)
              : (<div>No games on this day</div>)
          }
        </GamesContainer>
      </ScheduleContainer>
    );
  }
}