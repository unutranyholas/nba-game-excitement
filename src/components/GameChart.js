import React from "react";
import _ from "lodash";
import {scaleLinear} from "d3-scale";
import {line, curveNatural} from "d3-shape";
import {getTeam} from "../data/teams";
import {ds} from "../designSystem";
import {ChartContainer, ChartTeamName, ChartScore, QuarterLine, WinProbPath, FiftyPercentLine, ChartSvg} from "./Basic";

const chartSize = {width: 300, height: 100, margin: ds.space / 2};
const quarters = [0, 720, 1440, 2160, 2880, 3180, 3480, 3780, 4080, 4380];

export const GameChart = ({data: {gameData, winProbsLog: {winProbsLog}}}) => {

  if (!winProbsLog) {
    return <div />;
  }

  const log = winProbsLog.filter(winProb => winProb !== null);
  const x = scaleLinear()
    .domain([log[0].time, _.last(log).time])
    .range([chartSize.margin, chartSize.width - chartSize.margin]);

  const y = scaleLinear()
    .domain([0, 1000])
    .range([chartSize.margin, chartSize.height - chartSize.margin]);

  const winProbLine = line()
    .defined(d => !isNaN(d.time))
    .x(d => x(d.time))
    .y(d => y(d.winProb))
    .curve(curveNatural);

  const path = winProbLine(log);
  const vTeam = getTeam(gameData.vTeam.triCode);
  const hTeam = getTeam(gameData.hTeam.triCode);
  const vTeamColor = (vTeam && vTeam.color) ? vTeam.color : "#666";
  const hTeamColor = (hTeam && hTeam.color) ? hTeam.color : "#999";
  return (
    <ChartContainer>
      <ChartTeamName color={vTeamColor} position="top">
        {gameData.vTeam.triCode}
      </ChartTeamName>
      <ChartTeamName color={hTeamColor} position="bottom">
        {gameData.hTeam.triCode}
      </ChartTeamName>
      <ChartScore color={vTeamColor} position="top">{gameData.vTeam.score}</ChartScore>
      <ChartScore color={hTeamColor} position="bottom">{gameData.hTeam.score}</ChartScore>
      <ChartSvg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
      >
        <defs>
          <clipPath id="top">
            <rect x="0" y="0" width={chartSize.width} height={chartSize.height / 2} />
          </clipPath>
          <clipPath id="bottom">
            <rect x="0" y={chartSize.height / 2} width={chartSize.width} height={chartSize.height / 2} />
          </clipPath>
        </defs>
        <WinProbPath d={path} stroke={vTeamColor} clipPath="url(#top)" />
        <WinProbPath d={path} stroke={hTeamColor} clipPath="url(#bottom)" />
        <FiftyPercentLine x1={0} x2={chartSize.width} y1={chartSize.height / 2} y2={chartSize.height / 2} />
        {quarters.map(quarter => <QuarterLine
          x1={x(quarter)}
          x2={x(quarter)}
          y1={0}
          y2={chartSize.height}
        />)}
      </ChartSvg>
    </ChartContainer>
  );
};