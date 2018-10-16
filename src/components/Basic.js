import styled, {css, keyframes} from "styled-components";
import {colorScale, ds} from "../designSystem";

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

const showLink = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ScheduleContainer = styled.div`
  padding: ${ds.rem(ds.space)};
  max-width: ${ds.rem(ds.containerWidth)};
  margin: 0 auto;
`;

export const NavButtons = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 450px) {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-gap: ${ds.rem(ds.space)};
  align-items: center;
  margin-bottom: ${ds.rem(ds.space)};
  margin-top: ${ds.rem(ds.space)};
  @media (max-width: 450px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    margin-top: 0;
  }
`;

export const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${ds.rem(ds.cardWidth)}, 1fr));
  grid-gap: ${ds.rem(ds.space)};
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: ${ds.rem(24)};
  color: white;
  line-height: 1;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  background: linear-gradient(-150deg, #597AC8F6, #B45ABFF6, #FF3D00F6);
  padding: ${ds.rem(ds.space / 4 * 3)} ${ds.rem(ds.space)} ${ds.rem(ds.space / 4 * 5)};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Emoji = styled.span`
  font-size: 1.2em;
  position: relative;
  bottom: -0.15em;
`;

export const Time = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-feature-settings: "tnum";
  font-size: ${ds.rem(14)};
  min-width: ${ds.rem(40)};
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
  animation: ${loading} 0.8s ease-in-out infinite;
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
  position: relative;
  user-select: none;
  display: grid;
  grid-template-columns: auto ${ds.rem(ds.logoSize)} 1fr auto;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  grid-gap: 0 ${ds.rem(ds.space / 2)};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: ${ds.rem(ds.space / 4 * 3)} ${ds.rem(ds.space)};
  border-radius: ${ds.rem(ds.space / 4)};
  background-color: white;
  height: ${ds.rem(ds.cardHeight)};
  overflow: hidden;
  ${({spoilerable}) => spoilerable && css`
    transition: box-shadow 0.1s ease-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
  `}
`;

export const TeamName = styled.div`
  font-weight: 700;
  font-size: ${ds.rem(18)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Score = styled.div`
  font-size: ${ds.rem(36)};
  font-weight: 700;
  font-feature-settings: "tnum", "zero";
  ${({value}) => css`
    color: ${value ? colorScale(value) : "#CCC"};
  `}
  }
`;

export const LogoPlaceholder = styled.div`
  width: ${ds.rem(ds.logoSize - ds.space / 2)};
  height: ${ds.rem(ds.logoSize - ds.space / 2)};
  border-radius: ${ds.rem(ds.logoSize / 2)};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  margin: ${ds.rem(ds.space / 4)};
`;

export const SeasonStage = styled.div`
  font-size: ${ds.rem(12)};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${ds.rem(3)};
  font-weight: 400;
  margin: 0;
  padding: 0;
  min-height: ${ds.rem(12)};
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

export const ChartContainer = styled.div`
  user-select: none;
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: white;
  transition: box-shadow 0.1s ease-out;
  ${({spoilerable}) => spoilerable && css`
    transition: box-shadow 0.1s ease-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
  `}
`;

export const ChartTeamName = styled.div`
  z-index: 5;
  font-size: ${ds.rem(16)};
  letter-spacing: ${ds.rem(2)};
  font-weight: 600;
  font-feature-settings: "ss03";
  line-height: 1;
  text-shadow: 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white,
    -1px 1px 0 white;
  position: absolute;
  left: ${ds.rem(ds.space / 3 * 2)};
  ${({color, position}) => css`
    color: ${color};
    ${position}: ${ds.rem(ds.space / 3 * 2)};
  `}
`;

export const ChartScore = styled.div`
  z-index: 5;
  font-size: ${ds.rem(16)};
  font-weight: 600;
  font-feature-settings: "tnum", "zero";
  line-height: 1;
  text-shadow: 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white;
  position: absolute;
  right: ${ds.rem(ds.space / 3 * 2)};
  ${({color, position}) => css`
    color: ${color};
    ${position}: ${ds.rem(ds.space / 3 * 2)};
  `}
`;

export const QuarterLine = styled.line`
  strokeWidth: 1;
  stroke: #00000022;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1 4;
  vector-effect: non-scaling-stroke;
`;

export const WinProbPath = styled.path`
  fill: none;
  stroke-width: 2; 
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
`;

export const FiftyPercentLine = styled.line`
  strokeWidth: 1;
  stroke: #00000011;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
`;

export const ChartSvg = styled.svg`
  position: absolute;
  display: block;
  width: 100%;
  height: ${ds.rem(ds.cardHeight)};
`;

export const ContentContainer = styled.div`
  max-width: ${ds.rem(ds.containerWidth * 0.7)};
  padding: ${ds.rem(ds.space / 2)} ${ds.rem(ds.space * 2)} ${ds.rem(ds.space * 4)};
  font-size: ${ds.rem(18)};
  line-height: 1.44;
  margin: 0 auto;
  & h2 {
    font-size: ${ds.rem(24)};
    margin: ${ds.rem(ds.space * 2)} 0 ${ds.rem(ds.space)};
    line-height: 1;
  }
  & p {
    margin: 0 0 ${ds.rem(ds.space)};
  }
  & a {
    color: #222222;
    text-decoration: none;
    border-bottom: 1px solid #00000033;
  }
  & ul {
    margin: 0;
    padding: 0 0 0 ${ds.rem(ds.space * 1.5)};
    list-style: square;
  }
   & li {
    margin: 0 0 ${ds.rem(ds.space / 2)};
    padding: 0;
  }
`;

export const FormulaWrapper = styled.div`
  text-align: center;
  padding: ${ds.rem(ds.space / 2)} 0;
  margin: ${ds.rem(ds.space * 1.5)} 0 ${ds.rem(ds.space)};
  white-space: nowrap;
  overflow-x: auto;
`;

export const NavItem = styled.div`
  z-index: 3000;
  animation: ${showLink} 0.2s ease-in;
  font-size: ${ds.rem(11)};
  font-weight: 700;
  color: white;
  line-height: 0.99;
  text-transform: uppercase;
  letter-spacing: ${ds.rem(2)};
  text-align: center;
  border-radius: ${ds.rem(20)};
  background-color: #00000022;
  position: fixed;
  top: ${ds.rem(ds.space / 4 * 3)};
  ${({position}) => css`
    ${position}: ${ds.rem(ds.space / 4 * 3)};
`}
  & a {
    color: white;
    text-decoration: none;
    display: block;
    padding: ${ds.rem(ds.space / 4)} ${ds.rem(ds.space / 4 * 3)} ${ds.rem(ds.space / 4)};
  }
`;

export const SubTitle = styled.div`
  font-size: ${ds.rem(11)};
  line-height: 1;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: ${ds.rem(2)};
  text-align: center;
  border-radius: ${ds.rem(20)};
  padding: ${ds.rem(ds.space / 4)}
`;

export const InfoChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${ds.rem(ds.space)};
  padding-bottom: ${ds.rem(ds.space * 2)};
  & p {
    margin: 0 ${ds.rem(ds.space / 3 * 2)} ${ds.rem(ds.space / 2)};
    font-size: ${ds.rem(14)};
    line-height: 1.2;
  }  
`;

export const SpoilButton = styled.div`
  font-size: ${ds.rem(11)};
  font-weight: 700;
  color: white;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${ds.rem(2)};
  text-align: center;
  border-radius: ${ds.rem(20)};
  background-color: #000000CC;
  padding: ${ds.rem(ds.space / 4)} ${ds.rem(ds.space / 4 * 3)} ${ds.rem(ds.space / 4 + 1)};
  cursor: pointer;
  &:hover {
    background-color: #000000;
  }
`;

export const SpoilWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #ffffffcc;
`;