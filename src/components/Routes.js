import React from "react";
import { Route, Switch } from "react-router-dom";
import mainPage from "../pages/mainPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={mainPage} />
      </Switch>
    );
  }
}

export default Routes;
