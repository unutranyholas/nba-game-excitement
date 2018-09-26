import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {Link} from "react-router-dom";
import {gamesCount, getPrevNextDays} from "../data/games";

const inputDate = "%Y%m%d";
const outputDate = "%b %d";
const parseUrlTime = timeParse(inputDate);
const formatTime = timeFormat(outputDate);

export const Nav = ({date}) => {
  const {nextDay, prevDay} = getPrevNextDays({date, gamesCount});
  return (
    <ul>
      <li>{prevDay ? <Link to={prevDay}>← {formatTime(parseUrlTime(prevDay))}</Link> : null}</li>
      <li>{nextDay ? <Link to={nextDay}>{formatTime(parseUrlTime(nextDay))} →</Link> : null}</li>
    </ul>
  );
};