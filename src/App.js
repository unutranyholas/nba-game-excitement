import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Schedule} from "./components/Schedule";

const About = () => <div>About</div>;
const Charts = () => <div>Charts</div>;

export const App = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Schedule} />
        <Route path="/:date" component={Schedule} />
        <Route path="/about" component={About} />
        <Route path="/charts" component={Charts} />
      </div>
    </Router>
  </div>
);
