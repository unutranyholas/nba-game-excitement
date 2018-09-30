import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {getGameIds} from "../data/games";
import {getSeasonStageName} from "../data/games.js";
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

    const gameIds = getGameIds(match.params.date);

    return (
      <div>
        <Nav date={formatUrlTime(date)} />
        <h3>{getSeasonStageName(match.params.date)}</h3>
        <h2>{formatTime(date)}</h2>
        <div>
          {
            gameIds.length > 0
              ? gameIds.map((gameId) => <GamePreview key={gameId} gameId={gameId} />)
              : (<div>No games on this day</div>)
          }
        </div>
      </div>
    );
  }
}