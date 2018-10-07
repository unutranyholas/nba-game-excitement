import React from "react";
import styled, {css, keyframes} from "styled-components";
import {colorScale, ds} from "../designSystem";

export const ScheduleContainer = styled.div`
  padding: ${ds.rem(ds.space)};
  max-width: ${ds.rem(ds.containerWidth)};
  margin: 0 auto;
`;

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${ds.rem(ds.space)};
  align-items: center;
  margin-bottom: ${ds.rem(ds.space)};
`;

export const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${ds.rem(ds.cardWidth)}, 1fr));
  grid-gap: ${ds.rem(ds.space)};
`;

export const Header = styled.div`
  padding: ${ds.rem(ds.space * 2)} 0;
  background: linear-gradient(-150deg, #597AC8, #B45ABF, #FF3D00);
  margin-bottom: ${ds.rem(ds.space)};
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: ${ds.rem(32)};
  margin: 0 auto ${ds.rem(ds.space / 4)};
  padding: 0 ${ds.rem(ds.space * 2)};
  color: white;
  line-height: 1;
  max-width: 1000px;
`;

export const SubTitle = styled.div`
  font-size: ${ds.rem(16)};
  margin: 0 auto;
  padding: 0 ${ds.rem(ds.space * 2)};
  color: white;
  max-width: 1000px;
`;

export const Time = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-feature-settings: "tnum";
  font-size: ${ds.rem(14)};
  min-width: ${ds.rem(50)};
`;

export const LiveBadge = styled.div`
  background-color: #FF3D00;
  font-weight: 700;
  color: white;
  padding: 0 0 ${ds.rem(1)};
  margin-top: ${ds.rem(ds.space / 4)};
  border-radius: ${ds.rem(3)};
  font-size: ${ds.rem(12)};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${ds.rem(3)};
`;

export const LinkWrapper = styled.div`
  font-size: ${ds.rem(16)};
  font-weight: 400;
  font-feature-settings: "tnum";
  border: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  line-height: 1;
  color: #CCCCCC;
  white-space: nowrap;
  & a {
    text-decoration: none;
    color: #000000;
    padding: ${ds.rem(ds.space / 2)} ${ds.rem(ds.space)};
    display: block;
  };
  & span {
    padding: ${ds.rem(ds.space / 2)} ${ds.rem(ds.space)};
    display: block;
  };
  ${({first}) => first ? css`
    border-top-left-radius: ${ds.rem(ds.space / 4)};
    border-bottom-left-radius: ${ds.rem(ds.space / 4)};
    margin-right: -1px;
  ` : null}
  ${({last}) => last ? css`
    border-top-right-radius: ${ds.rem(ds.space / 4)};
    border-bottom-right-radius: ${ds.rem(ds.space / 4)};
    margin-left: -1px;
  ` : null}  
`;

export const PreviewLayout = styled.div`
  display: grid;
  grid-template-columns: auto ${ds.rem(ds.logoSize)} 1fr auto;
  grid-template-rows: auto auto;
  align-items: center;
  grid-gap: ${ds.rem(ds.space / 4)};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: ${ds.rem(ds.space / 3 * 2)} ${ds.rem(ds.space)};
  border-radius: ${ds.rem(ds.space / 4)};
`;

export const TeamName = styled.div`
  font-weight: 700;
  font-size: ${ds.rem(18)};
`;

const loading = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;

export const Score = styled.div`
  font-size: ${ds.rem(36)};
  font-weight: 700;
  font-feature-settings: "tnum", "zero";
  ${({value}) => css`
    color: ${value ? colorScale(value) : "#CCC"};
  `}
  ${({animated}) => animated
  ? css`
        animation: ${loading} 0.8s ease-in-out infinite;
      `
  : null
  }
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
  padding: 0;
`;

export const Logo = styled.img`
  display: block;
  width: ${ds.rem(ds.logoSize)};
  height: ${ds.rem(ds.logoSize)};
`;

export const ScoreContainer = styled.div`
  grid-area: 1 / 4 / 3 / 5;
  align-self: flex-start;
`;

export const DateHeaderContainer = styled.div`
  margin-left: ${ds.rem(ds.space)};
`;