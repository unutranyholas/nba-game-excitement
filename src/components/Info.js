import React from "react";
import {Equation} from "react-equation";
import {connect} from "react-redux";
import {updateGame} from "../actions";
import {ds} from "../designSystem";
import {ContentContainer, FormulaWrapper} from "./Basic";
import {GameChart} from "./GameChart";
import {Header} from "./Header";
import {LinkToGames} from "./RootNav";

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
        <p>Let's imagine that you live in Europe and you're interested in basketball. Mostly, NBA games pass late at
          night, so the only way to watch the games is watch game replay in the morning. Surely, you don't want to know
          any
          spoilers.</p>
        <p>
          Also, you don't want to waste your time watching a boring game, where the result is evident in the second
          quarter. Definitely, you won't miss the seventh game between Golden State and Houston in any case, but
          choosing
          from 10 regular season games without spoilers can be problematic.
        </p>
        <h2>First steps</h2>
        <p>Once I asked yourself, what if I can calculate some drama rating of every NBA game using its powerful API. I
          tried to figure out the formula, and my first attempt was this:
        </p>
        <FormulaWrapper>
          <Equation>(Team 1 Max Lead + Team 2 Max Lead) / abs(Final Difference)</Equation>
        </FormulaWrapper>
        <p>This formula gave high results for games with impressive comebacks, but it wasn't the full answer about the
          tension
          of the game.
        </p>
        <p>Later, I found website <a href="http://wikihoops.com/">wikihoops.com</a> that calculate game
          rating <b>somehow</b>. I experienced some disappointment that my idea is already implemented and abandoned it
          for several months. It
          wasn't a problem because of an off-season.
        </p>
        <h2>
          Solution (aka Methodology)
        </h2>
        <p>In early September I came back to the idea of creating my little personal FiveThirtyEight. I did severe
          research
          (well, I just googled "NBA game excitement"), and <a
            href="https://sports.sites.yale.edu/game-excitement-index-part-ii">found the formula</a> that describes what
          I
          need pretty
          well.
        </p>
        <FormulaWrapper>
          <Equation>2400/(Game Length) sum(i, 2, number of plays, abs(Win Probability(i) -
            Win Probability(i-1)))</Equation>
        </FormulaWrapper>
        <p>In simple words, game excitement score is a sum of win probabilities changes during the game.</p>
        <p>Have a look at the charts:</p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridGap: ds.rem(ds.space * 2),
        }}>
          {boringGame && <div>
            <div style={{width: "100%", height: ds.cardHeight}}>
              <GameChart data={boringGame} />
            </div>
            <p>March 30, 2018<br />
              Nuggets — Thunder 126-125<br />
              Game Excitement Score: {boringGame.gameExcitement / 1000}
            </p>
          </div>}

          {excitingGame && <div>
            <div style={{width: "100%", height: ds.cardHeight}}>
              <GameChart data={excitingGame} />
            </div>
            <p>March 30, 2018<br />
              Nuggets — Thunder 126-125<br />
              Game Excitement Score: {excitingGame.gameExcitement / 1000}
            </p>
          </div>}
        </div>
        <p>As you can see the game excitement score is an entirely abstract number in the interval between 1 and 16.
          People
          definitely like 10-grade system, so I needed to normalize the score somehow.
        </p>
        <p>I build a game excitement score distribution of competitive NBA games of last 4 seasons (preseason and
          all-star
          games were excluded). According to that distribution top-1% games get rating 9.9, top-2% — 9.8, top-3% —
          9.7...,
          etc.
        </p>
        <p>So, the dependency between the score and the rating isn't linear. Rated 5 games will be as common as rated 9
          games.</p>
        <h2>
          Information for curious tech-savvy people
        </h2>

        <ul>
          <li>Backend: Node, Express.js, Postgres, Heroku;</li>
          <li>Front-end: React, Redux, Styled-Components, Google Pages;</li>
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
