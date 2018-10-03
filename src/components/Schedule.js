import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {getGameIds} from "../data/games";
import {getSeasonStageName} from "../data/games.js";
import {ds} from "../designSystem";
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
      <div style={{padding: `${ds.rem(ds.space)}`, maxWidth: 1000, margin: "0 auto"}}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          alignItems: "center",
          marginBottom: ds.rem(ds.space),
        }}>
          <div style={{marginLeft: ds.rem(ds.space)}}>
            <SeasonStage>{getSeasonStageName(match.params.date)}</SeasonStage>
            <DateHeader>{formatTime(date)}</DateHeader>
          </div>
          <Nav date={formatUrlTime(date)} />
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${ds.rem(300)}, 1fr))`,
          gridGap: ds.rem(ds.space),
        }}>
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