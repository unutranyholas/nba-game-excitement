import {scaleLinear} from "d3-scale";

export const ds = {
  logoSize: 40,
  space: 12,
};

export const colorScale = scaleLinear()
  .domain([2, 4, 6, 8, 10])
  .range([
    "#C3C3C3",
    "#93B7ED",
    "#72cc19",
    "#f3ee29",
    "#FF2E00",
  ]);