import React from "react";
import {BrowserRouter as Router, Redirect, Route, /*NavLink, */Switch} from "react-router-dom";
import {Title, SubTitle, Header} from "./components/Basic";
import {Schedule} from "./components/Schedule";
// import logos from "./data/logos";

const Info = () => <h2>Info</h2>;
const Charts = () => <h2>Charts</h2>;
const Home = () => <Redirect to="/games/" />;

export const App = () => (
  <div>
    <Router>
      <div>
        {/*<img src={logos["NBA_logo"]} height="40" />*/}
        <Header>
          <Title>NBA Game Excitement Score</Title>
          <SubTitle>Choose games worth to watch (without spoilers)</SubTitle>
        </Header>
        {/*<ul>*/}
        {/*<li><NavLink to="/games/">Games</NavLink></li>*/}
        {/*<li><NavLink to="/info/">Info</NavLink></li>*/}
        {/*<li><NavLink to="/charts/">Charts</NavLink></li>*/}
        {/*</ul>*/}
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/info/`} component={Info} />
          <Route path={`${process.env.PUBLIC_URL}/charts/`} component={Charts} />
          <Route exact path={`${process.env.PUBLIC_URL}/games/`} component={Schedule} />
          <Route path={`${process.env.PUBLIC_URL}/games/:date`} component={Schedule} />
        </Switch>
      </div>
    </Router>
  </div>
);
