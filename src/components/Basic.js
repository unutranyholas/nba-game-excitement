import React from "react";
import styled, {css} from "styled-components";
import logos from "../data/logos";
import {colorScale, ds} from "../designSystem";

export const Title = styled.div`
  font-weight: 700;
  font-size: ${ds.rem(32)};
  margin: 0 0 ${ds.rem(ds.space / 4)};
  padding: 0;
  color: white;
  line-height: 1;
`;

export const SubTitle = styled.div`
  font-size: ${ds.rem(16)};
  margin: 0;
  padding: 0;
  color: white;
`;

export const Time = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-feature-settings: "tnum";
  font-size: ${ds.rem(14)};
  min-width: ${ds.rem(50)};
`;

export const LinkWrapper = styled.div`
  font-size: ${ds.rem(12)};
  text-transform: uppercase;
  letter-spacing: ${ds.rem(3)};
  font-weight: 400;
  margin: 0 ${ds.rem(16)} 0 0;
  padding: 0;
`;

export const PreviewLayout = styled.div`
  display: grid;
  grid-template-columns: auto ${ds.logoSize}px 1fr auto;
  grid-template-rows: auto auto;
  align-items: center;
  grid-gap: ${ds.rem(ds.space / 4)};
  margin-bottom: ${ds.rem(ds.space)};
  margin-right: ${ds.rem(ds.space)};
  min-width: ${ds.rem(300)};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: ${ds.rem(ds.space / 3 * 2)} ${ds.rem(ds.space)};
  border-radius: ${ds.rem(ds.space / 4)};
`;

export const TeamName = styled.div`
  font-weight: 700;
  font-size: ${ds.rem(18)};
`;

export const Score = styled.div`
  font-size: ${ds.rem(36)};
  font-weight: 700;
  font-feature-settings: "tnum", "zero";
  ${({value}) => css`
    color: ${value ? colorScale(value) : "#CCC"};
  `}
`;

export const LogoPlaceholder = styled.div`
  width: ${ds.rem(ds.logoSize)};
  height: ${ds.rem(ds.logoSize)};
  border-radius: ${ds.rem(ds.logoSize / 2)};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;

export const SeasonStage = styled.div`
  font-size: ${ds.rem(12)};
  text-transform: uppercase;
  letter-spacing: ${ds.rem(3)};
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const DateHeader = styled.div`
  font-size: ${ds.rem(24)};
  font-weight: 700;
  margin-bottom: ${ds.rem(ds.space)};
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
