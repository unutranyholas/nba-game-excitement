import React from "react";
import "./App.css";
import logos from "./Logos";

// const serverUrl = "https://nba-game-excitement.herokuapp.com";
const serverUrl = "http://localhost:5000";

const GamePreview = (props) => {
  const {game} = props;
  const {gameId, date, gameData, gameExcitement} = game;
  const {vTeam, hTeam} = gameData;

  return (
    <div style={{
      display: "grid",
      gridTemplateRows: "auto auto",
      gridTemplateColumns: "1fr 1fr 1fr",
    }}>
      <div>{vTeam.triCode}</div>
      <div>{hTeam.triCode}</div>
      <div>{gameId}</div>
      <div>
        <img alt={vTeam.triCode} src={logos[`${vTeam.triCode}_logo`]} width={100} height={100} />
      </div>
      <div>
        <img alt={vTeam.triCode} src={logos[`${hTeam.triCode}_logo`]} width={100} height={100} />
      </div>
      <div>{gameExcitement}</div>
    </div>
  );
};

class App extends React.Component {
  state = {
    loaded: false,
    data: [],
  };

  async componentDidMount() {
    const games = await fetch(`${serverUrl}/games/20171018`);
    const gamesJson = await games.json();
    this.setState({data: gamesJson, loaded: true});
  }

  render() {
    const {data, loaded} = this.state;

    console.log(data);
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
