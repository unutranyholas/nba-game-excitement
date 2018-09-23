import React from "react";
import {Link} from "react-router-dom";
import {gamesCount, getPrevNextDays} from "../data/games";
import {formatUrlTime} from "./Schedule";

export const Nav = ({date}) => {
  const {nextDay, prevDay} = getPrevNextDays({date, gamesCount});
  const today = formatUrlTime(new Date());
  return (
    <ul>
      <li>{prevDay ? <Link to={prevDay}>Prev</Link> : <span>Prev</span>}</li>
      <li>{today !== date ? <Link to={today}>Today</Link> : <span>Today</span>}</li>
      <li>{nextDay ? <Link to={nextDay}>Next</Link> : <span>Next</span>}</li>
    </ul>
  );
};