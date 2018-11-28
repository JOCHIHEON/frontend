import React from "react";
import { Route, Switch } from "react-router-dom";
import Schedule from "./schedule/Schedule.js";
import FreeBoard from "./board/FreeBoard.js";
import QnABoard from "./board/QnABoard.js";
import FanBoard from "./board/FanBoard.js";
import NotFoundPage from "../pages/NotFoundPage.js";
import TeamInfo from "./team/TeamInfo.js";
import Test from "../Test.js";
import Ttest from "../Ttest.js";
import mainPage from "../pages/mainPage.js";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/test" exact component={Test} />
        <Route path="/" exact component={mainPage} />
        <Route path="/team" component={TeamInfo} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/board/free" component={FreeBoard} />
        <Route path="/board/fan" component={FanBoard} />
        <Route path="/board/qna" component={QnABoard} />
        <Route path="/404" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
