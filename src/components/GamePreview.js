import React from "react";
import {ds, colorScale} from "../designSystem";
import logos from "../data/logos";
import {calculateScore} from "../data/scores";
import {getTeam} from "../data/teams";
import {timeFormat} from "d3-time-format";

export const formatTime = timeFormat("%H:%M");

const gridStyle = {
  display: "grid",
  gridTemplateColumns: `auto ${ds.logoSize}px 1fr auto`,
  gridTemplateRows: `auto auto`,
  marginBottom: ds.space * 2.5,
  alignItems: "center",
  gridColumnGap: ds.space,
  gridRowGap: ds.space / 3,
};

const timeStyle = {
  color: "rgba(0, 0, 0, 0.4)",
  fontFeatureSettings: "tnum",
};
const teamNameStyle = {fontWeight: "600", minWidth: 60};
const scoreStyle = {
  gridArea: "1 / 4 / 3 / 5",
  paddingLeft: ds.space * 2,
  alignSelf: "flex-start",
  lineHeight: 1.55,
  fontWeight: "600",
  fontFeatureSettings: "\"tnum\", \"zero\"",
};

const LogoPlaceholder = () => (
  <div style={{
    width: ds.logoSize,
    height: ds.logoSize,
    borderRadius: ds.logoSize / 2,
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.2)",
  }} />
);
const Logo = ({triCode}) => (
  <img
    style={{display: "block"}}
    alt={triCode}
    src={logos[`${triCode}_logo`]}
    width={ds.logoSize}
    height={ds.logoSize}
  />);

export const GamePreview = (props) => {
  const {game} = props;
  const {gameData, gameExcitement} = game;
  const {vTeam, hTeam} = gameData;
  const hTeamData = getTeam(hTeam.triCode);
  const vTeamData = getTeam(vTeam.triCode);
  const score = calculateScore(gameExcitement);
  const time = new Date(gameData.startTimeUTC);
  const tooltip = gameExcitement
    ? `GameExcitement is ${(gameExcitement / 1000).toFixed(3)}, it's higher than ${score * 10}% games in 2014—2018`
    : "";

  return (
    <div style={gridStyle}>
      <div style={timeStyle}>{formatTime(time)}</div>
      <div>
        {logos[`${vTeam.triCode}_logo`]
          ? <Logo triCode={vTeam.triCode} />
          : <LogoPlaceholder />}
      </div>
      <div style={teamNameStyle}>{vTeamData ? vTeamData.nickname : vTeam.triCode}</div>
      <div />
      <div>
        {logos[`${hTeam.triCode}_logo`]
          ? <Logo triCode={hTeam.triCode} />
          : <LogoPlaceholder />}
      </div>

      <div style={teamNameStyle}>{hTeamData ? hTeamData.nickname : hTeam.triCode}</div>
      <div
        style={{
          ...scoreStyle,
          color: gameExcitement ? colorScale(score) : "#CCC",
        }}
        title={tooltip}>{gameExcitement ? score.toFixed(1) : "_._"}
      </div>
    </div>
  );
};

export const GamePreviewLoader = ({opacity}) => {
  return (
    <div style={{opacity, ...gridStyle}}>
      <div style={timeStyle}>--:--</div>
      <div>
        <LogoPlaceholder />
      </div>
      <div style={teamNameStyle}>|||||||||||||||||||||||||</div>
      <div />
      <div>
        <LogoPlaceholder />
      </div>

      <div style={teamNameStyle}>|||||||||||||||||||||</div>
      <div
        style={{
          ...scoreStyle,
          color: "#CCC",
        }}>_._
      </div>
    </div>
  );
};