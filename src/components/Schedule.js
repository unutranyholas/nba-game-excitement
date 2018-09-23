import React from "react";
import {ds} from "../designSystem";
import {GamePreview, GamePreviewLoader} from "./GamePreview";
import {timeParse, timeFormat} from "d3-time-format";
import {Link} from "react-router-dom";

import {timeDay} from "d3-time";

// const serverUrl = "https://nba-game-excitement.herokuapp.com";
const serverUrl = "http://localhost:5000";

const inputDate = "%Y%m%d";
const outputDate = "%b %d, %Y";
const parseUrlTime = timeParse(inputDate);
const formatUrlTime = timeFormat(inputDate);
const formatTime = timeFormat(outputDate);

const Nav = ({date}) => {
  return (<div>
    <Link to={formatUrlTime(timeDay.offset(date, -1))}>Prev</Link>
    {" "}
    <Link to={formatUrlTime(timeDay.offset(date, 1))}>Next</Link>
  </div>);
};

const initialState = {
  loaded: false,
  data: [],
};

export class Schedule extends React.PureComponent {
  state = initialState;

  fetchData = async (date) => {
    const games = await fetch(`${serverUrl}/games/${date}`);
    const gamesJson = await games.json();
    this.setState({data: gamesJson, loaded: true});
  };

  async componentDidMount() {
    await this.fetchData(this.props.match.params.date);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.date !== this.props.match.params.date) {
      this.setState(initialState);
      //FIX backend, not to fetch data from DATA.NBA if there aren't data in db.
      await this.fetchData(this.props.match.params.date);
    }
  }

  render() {
    const {match} = this.props;
    const {data, loaded} = this.state;
    const date = match.params.date
      ? parseUrlTime(match.params.date)
      : new Date();

    return (
      <div style={{padding: ds.space * 4}}>
        <Nav date={date} />
        <h1>{formatTime(date)}</h1>
        {
          loaded
            ? data.length > 0
            ? data.map((game) => <GamePreview key={game.gameId} game={game} />)
            : (<div>No games on this day</div>)
            : <React.Fragment>
              <GamePreviewLoader opacity={1} />
              <GamePreviewLoader opacity={0.8} />
              <GamePreviewLoader opacity={0.6} />
              <GamePreviewLoader opacity={0.4} />
              <GamePreviewLoader opacity={0.2} />
            </React.Fragment>
        }
      </div>
    );
  }
}