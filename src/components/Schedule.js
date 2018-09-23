import {timeFormat, timeParse} from "d3-time-format";
import React from "react";
import {ds} from "../designSystem";
import {GamePreview, GamePreviewLoader} from "./GamePreview";
import {Nav} from "./Nav";

const serverUrl = "https://nba-game-excitement.herokuapp.com";
// const serverUrl = "http://localhost:5000";

const inputDate = "%Y%m%d";
const outputDate = "%b %d, %Y";
const parseUrlTime = timeParse(inputDate);
export const formatUrlTime = timeFormat(inputDate);
const formatTime = timeFormat(outputDate);

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
        <Nav date={formatUrlTime(date)} />
        <div style={{fontSize: 24, marginBottom: ds.space * 3, fontWeight: "600"}}>{formatTime(date)}</div>
        <div style={{display: "inline-flex", flexDirection: "column", minWidth: 280}}>
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
      </div>
    );
  }
}