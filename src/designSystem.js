import {scaleLinear} from "d3-scale";
import {interpolateCubehelix} from "d3-interpolate";

export const ds = {
  logoSize: 36,
  rem: (x) => `${x / 16}rem`,
  space: 16,
};

export const colorScale = scaleLinear()
  .domain([0, 5, 10])
  .range([
    "#808080",
    "#597ac8",
    "#ff3d00",
    "#c63bcd",
  ])
  .interpolate(interpolateCubehelix);