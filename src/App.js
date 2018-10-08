import React from "react";
import {HashRouter as Router, Redirect, Route, /*NavLink, */Switch} from "react-router-dom";
import {Title, SubTitle, Header} from "./components/Basic";
import {Schedule} from "./components/Schedule";
// import logos from "./data/logos";

const Info = () => <h2>Info</h2>;
const Charts = () => <h2>Charts</h2>;
const Home = () => <Redirect to={`/games/`} />;

export const App = () => (
  <div>
    <Router basename={"/"}>
      <div>
        {/*<img src={logos["NBA_logo"]} height="40" />*/}
        <Header>
          <Title>NBA Game Excitement Rating</Title>
          <SubTitle>Choose games worth to watch (without spoilers)</SubTitle>
        </Header>
        {/*<ul>*/}
        {/*<li><NavLink to="/games/">Games</NavLink></li>*/}
        {/*<li><NavLink to="/info/">Info</NavLink></li>*/}
        {/*<li><NavLink to="/charts/">Charts</NavLink></li>*/}
        {/*</ul>*/}
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route path={`/info/`} component={Info} />
          <Route path={`/charts/`} component={Charts} />
          <Route exact path={`/games/`} component={Schedule} />
          <Route path={`/games/:date`} component={Schedule} />
        </Switch>
      </div>
    </Router>
  </div>
);
