import React from "react";
import "./App.css";
import logos from "./Logos";

const serverUrl = "https://nba-game-excitement.herokuapp.com";

const GamePreview = (props) => {
  const {game} = props;
  const {hTeam, vTeam, gameExcitement} = game;
  return (
    <div style={{
      display: "grid",
      gridTemplateRows: "auto auto",
      gridTemplateColumns: "1fr 1fr 1fr",
    }}>
      <div>{vTeam.triCode}</div>
      <div>{hTeam.triCode}</div>
      <div>{gameExcitement}</div>
      <div><img src={logos[`${vTeam.triCode}_logo`]} width={100} height={100} /></div>
      <div><img src={logos[`${hTeam.triCode}_logo`]} width={100} height={100} /></div>
      <div></div>
    </div>
  );
};

class App extends React.Component {
  state = {
    loaded: false,
    data: [],
  };

  async componentDidMount() {
    const games = await fetch(`${serverUrl}/games/20171017`);
    const gamesJson = await games.json();
    this.setState({data: gamesJson, loaded: true});
  }

  render() {
    const {data, loaded} = this.state;
    return (
      <div>
        {
          loaded
            ? data.map((game) => <GamePreview key={game.gameId} game={game} />)
            : "Loading..."
        }
      </div>
    );
  }
}

export default App;
