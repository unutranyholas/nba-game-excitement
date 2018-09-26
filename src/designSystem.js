import {scaleLinear} from "d3-scale";

export const ds = {
  logoSize: 36,
  space: 12,
};

export const colorScale = scaleLinear()
  .domain([1, 5, 9])
  .range([
    "#588ac3",
    "#c651cc",
    "#FF2E00",
  ]);