import React from "react";
import { Route, Switch } from "react-router-dom";
import Schedule from "./schedule/Schedule.js";
import FreeBoard from "./board/FreeBoard.js";
import QnABoard from "./board/QnABoard.js";
import FanBoard from "./board/FanBoard.js";
import NotFoundPage from "../pages/NotFoundPage.js";
import mainPage from "../pages/mainPage.js";
import TeamPage from "../pages/TeamPage.js";
import MainSchedule from "./main/MainSchedule.js";
import MainTeamRank from "./main/MainTeamRank.js";
import BoardPage from "../pages/BoardPage.js";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={mainPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/board" component={BoardPage} />
        <Route path="/mainteamrank" component={MainTeamRank} />
        <Route path="/mainschedule" component={MainSchedule} />
      </Switch>
    );
  }
}

export default Routes;
