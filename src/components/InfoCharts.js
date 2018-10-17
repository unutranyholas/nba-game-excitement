import React from "react";
import {ds} from "../designSystem";
import {InfoChartsContainer} from "./Basic";
import {GameChart} from "./GameChart";
import {formatTime, parseUrlTime} from "./Schedule";

export const InfoCharts = ({boringGame, excitingGame}) => {
  return (
    <InfoChartsContainer>
      {boringGame && <div>
        <div style={{height: ds.cardHeight, marginBottom: 12}}>
          <GameChart data={boringGame} />
        </div>
        <p>{formatTime(parseUrlTime(boringGame.date))}. Spurs took the lead in&nbsp;the first quarter
          against Suns and kept it&nbsp;for the whole game. </p>
        <p>Game Excitement
          Score: <strong>{boringGame.gameExcitement / 1000}</strong></p>
      </div>}
      {excitingGame && <div>
        <div style={{height: ds.cardHeight, marginBottom: 12}}>
          <GameChart data={excitingGame} />
        </div>
        <p>{formatTime(parseUrlTime(excitingGame.date))}. Knicks and Hawks needed 4&nbsp;exhausting
          overtimes to&nbsp;reveal the winner. </p>
        <p>Game Excitement
          Score: <strong>{excitingGame.gameExcitement / 1000}</strong></p>
      </div>}
    </InfoChartsContainer>);
};