import React from "react";
import {connect} from "react-redux";
import {updateGame} from "../actions";
import Formula1 from "../data/Formula1.svg";
import Formula2 from "../data/Formula2.svg";
import {ds} from "../designSystem";
import {ContentContainer, FormulaWrapper} from "./Basic";
import {DistChart} from "./DistChart";
import {Header} from "./Header";
import {InfoCharts} from "./InfoCharts";
import {LinkToGames} from "./RootNav";

class InfoComponent extends React.Component {
  boringGameId = "0021700810";
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
    return (<React.Fragment>
      <LinkToGames />
      <Header />
      <ContentContainer><h2>Problem</h2>
        <p>
          Let&rsquo;s imagine that you live in&nbsp;Europe and you&rsquo;re interested in&nbsp;basketball. Mostly, NBA
          games pass late at&nbsp;night, so&nbsp;the only way to&nbsp;watch the games is&nbsp;watch game replay
          in&nbsp;the morning. Surely, you don&rsquo;t want to&nbsp;know any spoilers.
        </p>
        <p>
          Also, you don&rsquo;t want to&nbsp;waste your time watching a&nbsp;boring game, where the result
          is&nbsp;evident in&nbsp;the second quarter. You won&rsquo;t miss the seventh game between Golden State and
          Houston in&nbsp;any case, but choosing from 10&nbsp;regular season games without spoilers can
          be&nbsp;problematic.
        </p>
        <h2>First steps</h2>
        <p>Once I&nbsp;asked yourself, what if&nbsp;I can calculate some drama rating of&nbsp;every game using powerful
          NBA API. I&nbsp;tried to&nbsp;figure out a&nbsp;formula, and my&nbsp;first attempt was this:
        </p>
        <FormulaWrapper>
          <img src={Formula1} alt="(Team 1 Max Lead + Team 2 Max Lead) / ABS(Final Difference)" />
        </FormulaWrapper>
        <p>This formula gave high results for games with impressive comebacks, but it&nbsp;wasn&rsquo;t the full answer
          about the tension of&nbsp;the game.
        </p>
        <p>Later, I&nbsp;found website <a href="http://wikihoops.com/">wikihoops.com</a> that calculate game rating
          somehow. I&nbsp;experienced some disappointment that someone already implemented my&nbsp;idea and abandoned
          it&nbsp;for several months. It&nbsp;wasn&rsquo;t a&nbsp;problem because of&nbsp;an&nbsp;off-season.</p>
        <h2>
          Solution
        </h2>
        <p>In&nbsp;early September I&nbsp;came back to&nbsp;the idea of&nbsp;creating my&nbsp;little personal
          FiveThirtyEight. I&nbsp;did severe research (well, just googled &ldquo;NBA game excitement&rdquo;), and <a
            href="https://sports.sites.yale.edu/game-excitement-index-part-ii">found the formula</a> that describes
          what&nbsp;I need pretty well.
        </p>
        <FormulaWrapper>
          <img
            src={Formula2}
            alt="2880 / (Game Length) sum(i = 2, Number of plays) abs(Win Probability(i) - Win Probability(i-1))"
          />
        </FormulaWrapper>
        <p>In&nbsp;simple words, game excitement score is&nbsp;a&nbsp;sum of&nbsp;win probability changes during the
          game.
        </p>
        <p>Have a&nbsp;look at&nbsp;the visual representation of&nbsp;the most boring and the most exciting games
          in&nbsp;2014&ndash;2018:
        </p>
        <InfoCharts boringGame={boringGame} excitingGame={excitingGame} />
        <p>As&nbsp;you can see the game excitement score is&nbsp;an&nbsp;entirely abstract number in&nbsp;the range from
          1&nbsp;to&nbsp;16. But people like the 10-point scale, so&nbsp;I needed to&nbsp;normalize the score somehow.
        </p>
        <p>I&nbsp;build a&nbsp;game excitement score distribution of&nbsp;the last four seasons NBA games (excluding
          preseason and all-star games).
        </p>
        <div style={{height: ds.cardHeight, marginBottom: 12}}>
          <DistChart />
        </div>
        <p>According to&nbsp;that distribution<br />
          <span style={{marginLeft: ds.rem(ds.space / 2 * 3), display: "block"}}>
top-1% games get rating 9.9,<br />
top-2%&nbsp;&mdash; 9.8,<br />
top-3%&nbsp;&mdash; 9.7..., etc.
</span>
        </p>
        <p>So, the dependency between the score and the rating isn&rsquo;t linear. Games with a&nbsp;rating
          of&nbsp;5&nbsp;will occur as&nbsp;often as&nbsp;games with a&nbsp;rating of&nbsp;9.
        </p>
        <h2>
          Information for curious tech-savvy people
        </h2>
        <ul>
          <li>Backend: Node, Express.js, Postgres, Heroku;</li>
          <li>Front-end: React, Redux, D3, Styled-Components, Google Pages;</li>
          <li>Font: <a href="https://fonts.floriankarsten.com/space-grotesk">Space Grotesk</a>;</li>
        </ul>
      </ContentContainer>
    </React.Fragment>);
  }
}

export const Info = connect(
  ({games}) => ({games}),
  {updateGame},
)(InfoComponent);
