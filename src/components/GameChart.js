import React from "react";
import _ from "lodash";
import {scaleLinear} from "d3-scale";
import {line, curveBasis} from "d3-shape";
import {getTeam} from "../data/teams";

const chartSize = {width: 300, height: 100, margin: 8};

export const GameChart = ({data: {gameData, winProbsLog: {winProbsLog}}}) => {

  if (!winProbsLog) {
    return <div />;
  }

  const log = winProbsLog.filter(winProb => winProb !== null);
  const x = scaleLinear()
    .domain([log[0].time, _.last(log).time])
    .range([chartSize.margin, chartSize.width - chartSize.margin * 4]);

  const y = scaleLinear()
    .domain([0, 1000])
    .range([chartSize.margin, chartSize.height - chartSize.margin]);

  const winProbLine = line()
    .defined(d => !isNaN(d.time))
    .x(d => x(d.time))
    .y(d => y(d.winProb))
    .curve(curveBasis);

  const path = winProbLine(log);
  const vTeam = getTeam(gameData.vTeam.triCode);
  const hTeam = getTeam(gameData.hTeam.triCode);
  return (
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        borderRadius: 4,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <defs>
        <clipPath id="top">
          <rect x="0" y="0" width={chartSize.width} height={chartSize.height / 2} />
        </clipPath>
        <clipPath id="bottom">
          <rect x="0" y={chartSize.height / 2} width={chartSize.width} height={chartSize.height / 2} />
        </clipPath>
      </defs>

      <path
        d={path}
        fill={"none"} strokeWidth={2} stroke={(vTeam && vTeam.color) ? vTeam.color : "#666"}
        strokeLinecap="round" strokeLinejoin="round"
        clipPath="url(#top)"
      />
      <path
        d={path}
        fill={"none"} strokeWidth={2} stroke={(hTeam && hTeam.color) ? hTeam.color : "#666"}
        strokeLinecap="round" strokeLinejoin="round"
        clipPath="url(#bottom)"
      />
      <text x={chartSize.margin} y={chartSize.margin} alignmentBaseline={"before-edge"}>{gameData.vTeam.triCode}</text>
      <text x={chartSize.margin} y={chartSize.height - chartSize.margin}
            alignmentBaseline={"after-edge"}>{gameData.hTeam.triCode}</text>
      <text x={chartSize.width - chartSize.margin} y={chartSize.height / 2 - chartSize.margin}
            alignmentBaseline={"after-edge"} textAnchor={"end"} stroke={"white"} strokeWidth={3}
            strokeLinejoin="round"
            paintOrder={"stroke"}>{gameData.vTeam.score}</text>
      <text x={chartSize.width - chartSize.margin} y={chartSize.height / 2 + chartSize.margin}
            alignmentBaseline={"before-edge"} textAnchor={"end"} stroke={"white"} strokeWidth={3}
            strokeLinejoin="round"
            paintOrder={"stroke"}>{gameData.hTeam.score}</text>
      <line
        x1={0} x2={chartSize.width} y1={chartSize.height / 2} y2={chartSize.height / 2}
        strokeWidth={1} stroke={"#00000011"} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};