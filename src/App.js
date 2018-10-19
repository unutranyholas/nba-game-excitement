import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Info} from "./components/Info";
import {Schedule} from "./components/Schedule";

const Charts = () => <h2>Charts</h2>;
const Home = () => <Redirect to={`/games/`} />;

export const App = () => (
  <div>
    <Router basename={"/"}>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route path={`/info/`} component={Info} />
        <Route path={`/charts/`} component={Charts} />
        <Route exact path={`/games/`} component={Schedule} />
        <Route path={`/games/:date`} component={Schedule} />
      </Switch>
    </Router>
  </div>
);
