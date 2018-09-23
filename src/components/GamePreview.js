import React from "react";
import {ds, colorScale} from "../designSystem";
import logos from "../data/logos";
import {calculateScore} from "../data/scores";
import {getTeam} from "../data/teams";

const gridStyle = {
  display: "grid",
  gridTemplateRows: "auto auto",
  gridTemplateColumns: "1fr 1fr auto",
  marginBottom: ds.space * 3,
  gridGap: ds.space,
};

const LogoPlaceholder = () => (<div style={{
  width: ds.logoSize,
  height: ds.logoSize,
  borderRadius: ds.logoSize / 2,
  boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.2)",
}} />);
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

  return (
    <div style={gridStyle}>
      <div>
        {logos[`${vTeam.triCode}_logo`]
          ? <Logo triCode={vTeam.triCode} />
          : <LogoPlaceholder />}
      </div>
      <div>
        {logos[`${hTeam.triCode}_logo`]
          ? <Logo triCode={hTeam.triCode} />
          : <LogoPlaceholder />}
      </div>
      <div></div>
      <div>{vTeamData ? vTeamData.nickname : vTeam.triCode}</div>
      <div>{hTeamData ? hTeamData.nickname : hTeam.triCode}</div>
      <div
        style={{fontWeight: "bold", color: gameExcitement ? colorScale(score) : "inherit"}}
        title={`GameExcitement is ${gameExcitement}`}>{gameExcitement ? score.toFixed(1) : "—"}
      </div>
    </div>
  );
};

export const GamePreviewLoader = ({opacity}) => {
  return (
    <div style={{opacity, ...gridStyle}}>
      <div>
        <LogoPlaceholder />
      </div>
      <div>
        <LogoPlaceholder />
      </div>
      <div></div>
      <div>...</div>
      <div>...</div>
      <div style={{fontWeight: "bold"}}>—</div>
    </div>
  );
};