import React from "react";
import {getPrevNextDays} from "./data/games.js";

const gamesCount = [
  {date: "20140101"},
  {date: "20150101"},
  {date: "20160101"},
  {date: "20170101"},
  {date: "20180101"},
];

describe("Test getPrevNextDays func", () => {
  test("Before the period", () => {
    expect(getPrevNextDays({date: "20130101", gamesCount})).toEqual({nextDay: "20140101", prevDay: null});
  });
  test("After the period", () => {
    expect(getPrevNextDays({date: "20190101", gamesCount})).toEqual({nextDay: null, prevDay: "20180101"});
  });
  test("In the correct date", () => {
    expect(getPrevNextDays({date: "20160101", gamesCount})).toEqual({nextDay: "20170101", prevDay: "20150101"});
  });
  test("In the middle between dates", () => {
    expect(getPrevNextDays({date: "20150630", gamesCount})).toEqual({nextDay: "20160101", prevDay: "20150101"});
  });
});
