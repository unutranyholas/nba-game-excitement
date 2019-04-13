import {timeFormat} from "d3-time-format";
import React from "react";
import logos from "../data/logos";
import {calculateScore} from "../data/scores";
import {getTeamById} from "../data/teams";
import {ds} from "../designSystem";
import {LiveBadge, Logo, LogoPlaceholder, PreviewLayout, Score, ScoreContainer, TeamName, Time} from "./Basic";
import {GameChart} from "./GameChart";

export const formatTime = timeFormat("%H:%M");

export class GamePreview extends React.Component {
  render() {
    const {data, needUpdate, spoiled, onClick} = this.props;
    const {gameData, gameExcitement} = data;
    const {vTeam, hTeam, startTimeUTC, statusNum} = gameData;
    const hTeamData = getTeamById(hTeam.teamId);
    const vTeamData = getTeamById(vTeam.teamId);
    const score = calculateScore(gameExcitement);
    const time = new Date(startTimeUTC);
    const tooltip = gameExcitement
      ? `Game excitement is ${(gameExcitement / 1000).toFixed(3)}, it's higher than ${score * 10}% games in 2014—2018`
      : "";
    return spoiled
      ? <div onClick={onClick} style={{height: ds.rem(ds.cardHeight)}}>
        <GameChart data={data} spoilerable={statusNum > 1} />
      </div>
      : <PreviewLayout spoilerable={statusNum > 1} onClick={statusNum > 1 ? onClick : null}>
        <Time>{formatTime(time)}</Time>
        <div>
          {logos[`${vTeamData.tricode}_logo`]
            ? <Logo alt={vTeamData.tricode} src={logos[`${vTeamData.tricode}_logo`]} />
            : <LogoPlaceholder />}
        </div>
        <TeamName>{vTeamData ? vTeamData.nickname : hTeamData.tricode}</TeamName>
        <div />
        <div>
          {logos[`${hTeamData.tricode}_logo`]
            ? <Logo alt={hTeamData.tricode} src={logos[`${hTeamData.tricode}_logo`]} />
            : <LogoPlaceholder />}
        </div>
        <TeamName>{hTeamData ? hTeamData.nickname : hTeamData.tricode}</TeamName>
        <ScoreContainer>
          <Score
            value={gameExcitement ? score : null}
            title={tooltip}
            animated={needUpdate}
          >
            {gameExcitement ? score.toFixed(1) : "–.–"}
          </Score>
          {statusNum === 2 && <LiveBadge>Live</LiveBadge>}
        </ScoreContainer>
      </PreviewLayout>;
  }
}

export const GamePreviewLoader = () => {
  return (
    <PreviewLayout>
      <Time>--:--</Time>
      <div>
        <LogoPlaceholder />
      </div>
      <TeamName>||||||||||||||</TeamName>
      <div />
      <div>
        <LogoPlaceholder />
      </div>
      <TeamName>|||||||||||</TeamName>
      <ScoreContainer>
        <Score>–.–</Score>
      </ScoreContainer>
    </PreviewLayout>
  );
};
