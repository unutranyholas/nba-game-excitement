import React from "react";
import {ContentContainer} from "./Basic";

export const Info = () => <ContentContainer>
  <h2>Problem</h2>
  <p>Let's imagine that you live in Europe and you're interested in basketball. Mostly, NBA games pass late at night, so
    the only way to watch the games is watch game replay in the morning. Surely, you don't want to know any spoilers.
    Also, you don't want to waste your time watching a boring game, where the result is evident in the second quarter.
    Definitely, you won't miss the seventh game between Golden State and Houston in any case, but choosing from 10
    regular season games without spoilers can be problematic.
  </p>
  <h2>First steps</h2>
  <p>Once I asked yourself, what if I can calculate some drama rating of every NBA game using its powerful API. I tried
    to figure out the formula, and my first attempt was this:
  </p>
  <blockquote>
    ABS((MAX_LEAD_TEAM1 + MAX_LEAD_TEAM2) / FINAL_DIFF)
  </blockquote>
  <p>This formula gave high results for games with impressive comebacks, but it wasn't the full answer about the tension
    of the game.
  </p>
  <p>Later, I found website <a href="http://wikihoops.com/">wikihoops.com</a> that calculate game
    rating <em>somehow</em>. I
    experienced some disappointment that my idea is already implemented and abandoned it for several months. It wasn't a
    problem because of an off-season.
  </p>
  <h2>
    Solution (aka Methodology)
  </h2>
  <p>In early September I came back to the idea of creating my little personal FiveThirtyEight. I did severe research
    (well, I just googled "NBA game excitement" phrase), and found the formula that describes what I need pretty well.
  </p>
  <p>FORMULA</p>
  <p>In simple words, game excitement score is a sum of win probabilities changes during the game.</p>
  <p>Have a look at the charts:</p>
  <p>BORING CHART</p>
  <p>March 5, 2018<br />
    Bulls — Celtics 89-105<br />
    Game Excitement Score: 1.791</p>
  <p> Win probability almost didn’t change. Celtics took the lead in the first quarter, and kept it for the whole
    game. Boring…</p>
  <p>EXCITING CHART</p>
  <p>March 30, 2018<br />
    Nuggets — Thunder 126-125<br />
    Game Excitement Score: 12.710
  </p>
  <p>Two comebacks and overtime. Worth to watch.</p>
  <p>Win probabilities for every moment of the game were cleverly captured from <a
    href="http://stats.inpredictable.com/nba/wpCalc.php">inpredictable.com</a>. Sorry about that.
  </p>
  <p>As you can see the game excitement score is an entirely abstract number in the interval between 1 and 15. People
    definitely like 10-grade system, so I needed to normalize the score somehow.
  </p>
  <p>I build a game excitement score distribution of competitive NBA games of last 4 seasons (preseason and all-star
    games were excluded). According to that distribution top-1% games get rating 9.9, top-2% — 9.8, top-3% — 9.7...,
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
</ContentContainer>;
