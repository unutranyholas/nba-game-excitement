import {scaleLinear} from "d3-scale";
import _ from "lodash";
import React from "react";
import {colorScale, ds} from "../designSystem";
import {ChartContainer, ChartSvg} from "./Basic";
import {scores, bins} from "../data/scores";
import {area, curveMonotoneX} from "d3-shape";

const chartSize = {width: ds.cardWidth, height: ds.cardHeight, margin: ds.space / 2};

export const DistChart = () => {
  const decScores = scores.filter((score) => score.score % 10 === 0);
  const x = scaleLinear()
    .domain([0, _.last(bins).bin * 1000])
    .range([chartSize.margin, chartSize.width - chartSize.margin]);

  const y = scaleLinear()
    .domain([0, _.maxBy(bins, ({count}) => count).count])
    .range([chartSize.height - chartSize.margin, chartSize.margin]);

  const areaPath = area()
    .x(d => x(d.bin * 1000))
    .y0(y(0))
    .y1(d => y(d.count))
    .curve(curveMonotoneX);

  return (
    <ChartContainer>
      <ChartSvg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
      >
        <clipPath id="area">
          <path d={areaPath(bins)} fill="#00000066" textAnchor="end" />
        </clipPath>
        {decScores.map(({border, score}, index) => <g>
          <rect
            x={x(border)}
            y={0}
            height={chartSize.height}
            clipPath="url(#area)"
            fill={colorScale(score / 10)}
            stroke="white"
            strokeWidth={0.5}
            shapeRendering="crispEdges"
            width={decScores[index + 1] ? x(decScores[index + 1].border - border) : chartSize.width - x(border)}
          />
          <text
            textAnchor={index === 0 ? "end" : "start"}
            x={index === 0 ? x(decScores[index + 1].border) : x(border)}
            y={chartSize.height - chartSize.margin}
            fill="yellow"
          >
            {index}
          </text>
        </g>)}
      </ChartSvg>
    </ChartContainer>
  );
};