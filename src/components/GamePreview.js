import {timeFormat} from "d3-time-format";
import React from "react";
import logos from "../data/logos";
import {calculateScore} from "../data/scores";
import {getTeam} from "../data/teams";
import {Logo, LogoPlaceholder, PreviewLayout, Score, TeamName, Time, LiveBadge, ScoreContainer} from "./Basic";

export const formatTime = timeFormat("%H:%M");

// const serverUrl = "http://localhost:5000";
const serverUrl = "https://nba-game-excitement.herokuapp.com";

const initialState = {
  loaded: false,
  game: {},
};

export class GamePreview extends React.Component {
  state = initialState;

  fetchData = async (gameId) => {
    const game = await fetch(`${serverUrl}/games/${gameId}/update`);
    const gameJson = await game.json();
    this.setState({game: gameJson, loaded: true});
    if (gameJson.calcTriggered) {
      await this.fetchUpdatedData(this.props.gameId);
    }
  };

  fetchUpdatedData = async (gameId) => {
    const game = await fetch(`${serverUrl}/games/${gameId}/load`);
    const gameJson = await game.json();
    if (gameJson.gameExcitement === null || gameJson.gameData.statusNum !== 3) {
      setTimeout(async () => {
        await this.fetchUpdatedData(gameId);
      }, 20000);
    } else {
      this.setState({game: {...gameJson, calcTriggered: false}});
    }
  };

  async componentDidMount() {
    await this.fetchData(this.props.gameId);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.gameId !== this.props.gameId) {
      this.setState(initialState);
      await this.fetchData(this.props.gameId);
    }
  }

  render() {
    const {game, loaded} = this.state;
    if (!loaded) {
      return <GamePreviewLoader />;
    }
    const {gameData, gameExcitement, calcTriggered} = game;
    const {vTeam, hTeam, startTimeUTC, statusNum} = gameData;
    const hTeamData = getTeam(hTeam.triCode);
    const vTeamData = getTeam(vTeam.triCode);
    const score = calculateScore(gameExcitement);
    const time = new Date(startTimeUTC);
    const tooltip = gameExcitement
      ? `GameExcitement is ${(gameExcitement / 1000).toFixed(3)}, it's higher than ${score * 10}% games in 2014—2018`
      : "";
    return (
      <PreviewLayout>
        <Time>{formatTime(time)}</Time>
        <div>
          {logos[`${vTeam.triCode}_logo`]
            ? <Logo alt={vTeam.triCode} src={logos[`${vTeam.triCode}_logo`]} />
            : <LogoPlaceholder />}
        </div>
        <TeamName>{vTeamData ? vTeamData.nickname : vTeam.triCode}</TeamName>
        <div />
        <div>
          {logos[`${hTeam.triCode}_logo`]
            ? <Logo alt={hTeam.triCode} src={logos[`${hTeam.triCode}_logo`]} />
            : <LogoPlaceholder />}
        </div>
        <TeamName>{hTeamData ? hTeamData.nickname : hTeam.triCode}</TeamName>
        <ScoreContainer>
          <Score
            value={gameExcitement ? score : null}
            title={tooltip}
            animated={calcTriggered}
          >
            {gameExcitement ? score.toFixed(1) : "_._"}
          </Score>
          {statusNum === 2 && <LiveBadge>Live</LiveBadge>}
        </ScoreContainer>
      </PreviewLayout>
    );
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
        <Score>_._</Score>
      </ScoreContainer>
    </PreviewLayout>
  );
};