import {scaleLinear} from "d3-scale";
import {area, curveMonotoneX} from "d3-shape";
import _ from "lodash";
import React from "react";
import {bins, ge} from "../data/scores";
import {colorScale, ds} from "../designSystem";

const chartSize = {width: ds.cardWidth * 3, height: ds.cardHeight * 5, margin: ds.space / 2};

export const DistChart = () => {
  const reducedBins = bins.reduce((acc, bin) => acc.length === 0 ? [bin.count] : [...acc, _.last(acc) + bin.count], []);
  console.log(reducedBins);

  const squareSize = 4;
  const gamesInRow = 10;

  const x = scaleLinear()
    .domain([0, _.last(bins).bin * 1000])
    .range([chartSize.margin, chartSize.width - chartSize.margin]);

  const y = scaleLinear()
    .domain([0, _.maxBy(bins, ({count}) => count).count])
    .range([chartSize.height - chartSize.margin, chartSize.margin]);

  return (
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${chartSize.width} ${chartSize.height}`}
      width={chartSize.width}
      height={chartSize.height}
    >
      {
        ge.map((x, index) => {
          const nextBinIndex = reducedBins.findIndex(bin => bin > index);
          const binIndex = nextBinIndex === -1 ? reducedBins.length - 2 : nextBinIndex - 1;
          const binSize = bins[binIndex + 1].count;
          const binHeight = Math.ceil(binSize / gamesInRow);
          const shift = Math.floor(x / 1000);
          const binStart = reducedBins[binIndex];
          const indexInColumn = index - binStart;
          const yInColumn = indexInColumn % binHeight;
          const xInColumn = Math.floor(indexInColumn / binHeight);
          const perc = Math.floor(index * 100 / ge.length);
          return <g key={index}><title>Game Excitement: {x}; Rating: {perc / 10};</title>
            <rect
              width={squareSize - 0.1}
              height={squareSize - 0.1}
              fill={colorScale(Math.floor(perc / 10))}
              x={(xInColumn + shift * (gamesInRow + 1 / squareSize)) * (squareSize)}
              y={chartSize.height - chartSize.margin - yInColumn * (squareSize)}
            />
          </g>;
        })
      }
    </svg>
  );
};