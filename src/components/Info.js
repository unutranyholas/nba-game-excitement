import React from "react";
import {Equation} from "react-equation";
import {connect} from "react-redux";
import {updateGame} from "../actions";
import {ds} from "../designSystem";
import {ContentContainer, FormulaWrapper} from "./Basic";
import {GameChart} from "./GameChart";
import {Header} from "./Header";
import {LinkToGames} from "./RootNav";
import {parseUrlTime, formatTime} from "./Schedule";

class InfoComponent extends React.Component {
  boringGameId = "0011400042";
  excitingGameId = "0021600711";

  componentDidMount() {
    const {updateGame} = this.props;
    updateGame({gameId: this.boringGameId});
    updateGame({gameId: this.excitingGameId});
  }

  render() {
    const {games} = this.props;
    const boringGame = games[this.boringGameId];
    const excitingGame = games[this.excitingGameId];
    return <React.Fragment>
      <LinkToGames />
      <Header />
      <ContentContainer>
        <h2>Problem</h2>
        <p>Let&rsquo;s imagine that you live in&nbsp;Europe and you&rsquo;re interested in&nbsp;basketball. Mostly, NBA
          games pass late at&nbsp;night, so&nbsp;the only way to&nbsp;watch the games is&nbsp;watch game replay
          in&nbsp;the morning. Surely, you don&rsquo;t want to&nbsp;know any spoilers.</p>
        <p>
          Also, you don&rsquo;t want to&nbsp;waste your time watching a&nbsp;boring game, where the result
          is&nbsp;evident in&nbsp;the second quarter. Definitely, you won&rsquo;t miss the seventh game between Golden
          State and Houston in&nbsp;any case, but choosing from 10&nbsp;regular season games without spoilers can
          be&nbsp;problematic.
        </p>
        <h2>First steps</h2>
        <p>Once I&nbsp;asked yourself, what if&nbsp;I can calculate some drama rating of&nbsp;every NBA game using its
          powerful API. I&nbsp;tried to&nbsp;figure out the formula, and my&nbsp;first attempt was this:
        </p>
        <FormulaWrapper>
          <Equation>(Team 1 Max Lead + Team 2 Max Lead) / abs(Final Difference)</Equation>
        </FormulaWrapper>
        <p>This formula gave high results for games with impressive comebacks, but it&nbsp;wasn&rsquo;t the full answer
          about the tension of&nbsp;the game.
        </p>
        <p>Later, I&nbsp;found website <a href="http://wikihoops.com/">wikihoops.com</a> that calculate game
          rating <b>somehow</b>. I&nbsp;experienced some disappointment that my&nbsp;idea is&nbsp;already implemented
          and abandoned it
          for several months. It&nbsp;wasn&rsquo;t a&nbsp;problem because of&nbsp;an&nbsp;off-season.
        </p>
        <h2>
          Solution (aka Methodology)
        </h2>
        <p>In&nbsp;early September I&nbsp;came back to&nbsp;the idea of&nbsp;creating my&nbsp;little personal <a
          href="http://fivethirtyeight.com/">FiveThirtyEight</a>. I&nbsp;did severe
          research (well, I&nbsp;just googled &ldquo;NBA game excitement&rdquo;), and <a
            href="https://sports.sites.yale.edu/game-excitement-index-part-ii">found the formula</a> that describes what
          I need pretty well.
        </p>
        <FormulaWrapper>
          <Equation>2880/(Game Length) sum(i, 2, Number of plays, abs(Win Probability(i) -
            Win Probability(i-1)))</Equation>
        </FormulaWrapper>
        <p>In&nbsp;simple words, game excitement score is&nbsp;a&nbsp;sum of&nbsp;win probabilities changes during the
          game.</p>
        <p>Have a&nbsp;look at&nbsp;the visual representation of&nbsp;the most boring and the most exciting games
          in&nbsp;2014&ndash;2018:</p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridTemplateRows: "auto auto",
          gridAutoFlow: "column",
          gridGap: `${ds.rem(ds.space / 2)} ${ds.rem(ds.space * 2)}`,
          paddingBottom: ds.rem(ds.space * 2),
        }}>
          {boringGame && <React.Fragment>
            <div style={{width: "100%", height: ds.cardHeight}}>
              <GameChart data={boringGame} />
            </div>
            <div>
              <p style={{
                margin: `0 ${ds.rem(ds.space / 3 * 2)}`,
                fontSize: ds.rem(14),
              }}>{formatTime(parseUrlTime(boringGame.date))}</p>
              <p style={{
                lineHeight: 1.2,
                margin: `0 ${ds.rem(ds.space / 3 * 2)} ${ds.rem(ds.space / 2)}`,
                fontSize: ds.rem(14),
              }}>Golden State
                took the lead in
                the first quarter, and kept it for the whole game.</p>
              <p style={{margin: `0 ${ds.rem(ds.space / 3 * 2)}`, fontSize: ds.rem(14)}}>Game Excitement
                Score: <b>{boringGame.gameExcitement / 1000}</b></p>
            </div>
          </React.Fragment>}
          {excitingGame && <React.Fragment>
            <div style={{width: "100%", height: ds.cardHeight}}>
              <GameChart data={excitingGame} />
            </div>
            <div>
              <p style={{
                margin: `0 ${ds.rem(ds.space / 3 * 2)}`,
                fontSize: ds.rem(14),
              }}>{formatTime(parseUrlTime(excitingGame.date))}</p>
              <p style={{
                lineHeight: 1.2,
                margin: `0 ${ds.rem(ds.space / 3 * 2)} ${ds.rem(ds.space / 2)}`,
                fontSize: ds.rem(14),
              }}>FOUR<br />
                OVERTIMES!!!</p>
              <p style={{margin: `0 ${ds.rem(ds.space / 3 * 2)}`, fontSize: ds.rem(14)}}>Game Excitement
                Score: <b>{excitingGame.gameExcitement / 1000}</b></p>
            </div>
          </React.Fragment>}
        </div>
        <p>As&nbsp;you can see the game excitement score is&nbsp;an&nbsp;entirely abstract number in&nbsp;the interval
          between 1&nbsp;and 16.
          People
          definitely like 10-grade system, so&nbsp;I needed to&nbsp;normalize the score somehow.
        </p>
        <p>I&nbsp;build a&nbsp;game excitement score distribution of&nbsp;competitive NBA games of&nbsp;last
          4&nbsp;seasons (preseason and
          all-star
          games were excluded). According to&nbsp;that distribution top-1% games get rating 9.9,
          top-2%&nbsp;&mdash; 9.8, top-3% &mdash;
          9.7...,
          etc.
        </p>
        <p>So, the dependency between the score and the rating isn&rsquo;t linear. Rated 5&nbsp;games will
          be&nbsp;as&nbsp;common as&nbsp;rated 9
          games.</p>
        <h2>
          Information for curious tech-savvy people
        </h2>

        <ul>
          <li>Backend: Node, Express.js, Postgres, Heroku;</li>
          <li>Front-end: React, Redux, D3, Styled-Components, Google Pages;</li>
          <li>Font: <a href="https://fonts.floriankarsten.com/space-grotesk">Space Grotesk</a>;</li>
        </ul>
      </ContentContainer>
    </React.Fragment>;
  }
}

export const Info = connect(
  ({games}) => ({games}),
  {updateGame},
)(InfoComponent);
