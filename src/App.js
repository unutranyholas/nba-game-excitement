import React from "react";
import {BrowserRouter as Router, Redirect, Route, /*NavLink, */Switch} from "react-router-dom";
import {Title, SubTitle} from "./components/Basic";
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
        <div style={{
          padding: 40,
          background: "linear-gradient(-150deg, #597ac8, #B45ABF, #ff3d00)",
          marginBottom: 20,
          borderRadius: 8,
        }}>
          <Title>NBA Game Excitement Score</Title>
          <SubTitle>Choose games worth to watch without spoilers</SubTitle>
        </div>
        {/*<ul>*/}
        {/*<li><NavLink to="/games/">Games</NavLink></li>*/}
        {/*<li><NavLink to="/info/">Info</NavLink></li>*/}
        {/*<li><NavLink to="/charts/">Charts</NavLink></li>*/}
        {/*</ul>*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info/" component={Info} />
          <Route path="/charts/" component={Charts} />
          <Route exact path="/games/" component={Schedule} />
          <Route path="/games/:date" component={Schedule} />
        </Switch>
      </div>
    </Router>
  </div>
);
