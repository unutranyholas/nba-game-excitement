import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {getGameIds} from "../data/games";
import {getSeasonStageName} from "../data/games.js";
import {SeasonStage, DateHeader} from "./Basic";
import {GamePreview} from "./GamePreview";
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
      <div>
        <Nav date={formatUrlTime(date)} />
        <SeasonStage>{getSeasonStageName(match.params.date)}</SeasonStage>
        <DateHeader>{formatTime(date)}</DateHeader>
          {
            gameIds.length > 0
              ? gameIds.map((gameId) => <GamePreview key={gameId} gameId={gameId} />)
              : (<div>No games on this day</div>)
          }
      </div>
    );
  }
}