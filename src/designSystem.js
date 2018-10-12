import {scaleLinear} from "d3-scale";
import {interpolateCubehelix} from "d3-interpolate";

export const ds = {
  logoSize: 36,
  containerWidth: 1000,
  cardWidth: 300,
  cardHeight: 100,
  space: 16,
  rem: (x) => `${x / 16}rem`,
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