import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage.js";
import Schedule from "./schedule/Schedule.js";
import FreeBoard from "./board/FreeBoard.js";
import QnABoard from "./board/QnABoard.js";
import FanBoard from "./board/FanBoard.js";
import NotFoundPage from "../pages/NotFoundPage.js";
import TeamInfo from "./team/TeamInfo.js";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/board/free" component={FreeBoard} />
        <Route path="/board/fan" component={FanBoard} />
        <Route path="/board/qna" component={QnABoard} />
        <Route path="/team" component={TeamInfo} />
        <Route path="/404" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
