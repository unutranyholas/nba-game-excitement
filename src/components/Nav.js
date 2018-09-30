import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {Link} from "react-router-dom";
import {gamesCount, getPrevNextDays} from "../data/games";
import {LinkWrapper} from "./Basic";
import {formatUrlTime} from "./Schedule";

const inputDate = "%Y%m%d";
const outputDate = "%b %d";
const parseUrlTime = timeParse(inputDate);
const formatTime = timeFormat(outputDate);

export const Nav = ({date}) => {
  const {nextDay, prevDay} = getPrevNextDays({date, gamesCount});
  const today = formatUrlTime(new Date());
  return (
    <React.Fragment>
      <LinkWrapper>{prevDay ? <Link to={prevDay}>← {formatTime(parseUrlTime(prevDay))}</Link> : null}</LinkWrapper>
      <LinkWrapper>{today !== date ? <Link to={today}>Today</Link> : <span>Today</span>}</LinkWrapper>
      <LinkWrapper>{nextDay ? <Link to={nextDay}>{formatTime(parseUrlTime(nextDay))} →</Link> : null}</LinkWrapper>
    </React.Fragment>
  );
};