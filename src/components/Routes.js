import React from "react";
import { Route, Switch } from "react-router-dom";
import mainPage from "../pages/mainPage.js";
import Schedule from "./schedule/Schedule.js";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={mainPage} />
        <Route path="/schedule" exact component={Schedule} />
      </Switch>
    );
  }
}

export default Routes;
