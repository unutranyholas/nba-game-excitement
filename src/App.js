import React from "react";
import {HashRouter as Router, /*NavLink, */Redirect, Route, Switch} from "react-router-dom";
import {Emoji, Header, /* Nav, NavItem, */Title} from "./components/Basic";
import {Info} from "./components/Info";
import {Schedule} from "./components/Schedule";

/* eslint-disable jsx-a11y/accessible-emoji */

const Charts = () => <h2>Charts</h2>;
const Home = () => <Redirect to={`/games/`} />;

export const App = () => (
  <div>
    <Router basename={"/"}>
      <div>
        <Header>
          <Title>
            Choose NBA&nbsp;<Emoji role="img" aria-label="Ball">🏀</Emoji>&nbsp;games worth watching with&nbsp;
            <Emoji role="img" aria-label="Closed eyes">🙈</Emoji>&nbsp;no&nbsp;spoilers
          </Title>
          {/*<Nav>*/}
          {/*<NavItem><NavLink to="/">Games</NavLink></NavItem>*/}
          {/*<NavItem><NavLink to="/info">Info</NavLink></NavItem>*/}
          {/*</Nav>*/}
        </Header>
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
