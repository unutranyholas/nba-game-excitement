import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {Link} from "react-router-dom";
import {gamesCount, getPrevNextDays} from "../data/games";
import {LinkWrapper, NavButtons} from "./Basic";

const inputDate = "%Y%m%d";
const outputDate = "%b %d";
const parseUrlTime = timeParse(inputDate);
const formatTime = timeFormat(outputDate);
const baseUrlPart = "/games/";

export const Nav = ({date, today}) => {
  const {nextDay, prevDay} = getPrevNextDays({date, gamesCount});
  return (
    <NavButtons>
      <LinkWrapper first>{prevDay ?
        <Link to={`${baseUrlPart}${prevDay}`}>{formatTime(parseUrlTime(prevDay))}</Link> : null}</LinkWrapper>
      <LinkWrapper>{today !== date ? <Link to={`${baseUrlPart}${today}`}>Today</Link> :
        <span>Today</span>}</LinkWrapper>
      <LinkWrapper last>{nextDay ?
        <Link to={`${baseUrlPart}${nextDay}`}>{formatTime(parseUrlTime(nextDay))}</Link> : null}</LinkWrapper>
    </NavButtons>
  );
};