import React from "react";
import styled, {css} from "styled-components";
import logos from "../data/logos";
import {colorScale, ds} from "../designSystem";

export const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

export const SubTitle = styled.div`
  font-size: 1em;
  margin: 0;
  padding: 0;
`;

export const Time = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-feature-settings: "tnum";
  font-size: 0.875rem;
  min-width: 60px;
`;

export const LinkWrapper = styled.div`
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 400;
  margin: 0 1rem 0 0;
  padding: 0;
`;

export const PreviewLayout = styled.div`
  display: grid;
  grid-template-columns: auto ${ds.logoSize}px 1fr auto;
  grid-template-rows: auto auto;
  align-items: center;
`;

export const TeamName = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  min-width: 80px;
`;

export const Score = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  font-feature-settings: "tnum", "zero";
  ${({value}) => css`
    color: ${value ? colorScale(value) : "#CCC"};
  `}
`;

export const LogoPlaceholder = styled.div`
  width: ${ds.logoSize}px;
  height: ${ds.logoSize}px;
  border-radius: ${ds.logoSize / 2}px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;

export const SeasonStage = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const DateHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const Logo = ({triCode}) => (
  <img
    style={{display: "block"}}
    alt={triCode}
    src={logos[`${triCode}_logo`]}
    width={ds.logoSize}
    height={ds.logoSize}
  />);
