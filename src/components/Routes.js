import React from "react";
import { Route, Switch } from "react-router-dom";
import Schedule from "./schedule/Schedule.js";
import FreeBoard from "./board/FreeBoard.js";
import QnABoard from "./board/QnABoard.js";
import FanBoard from "./board/FanBoard.js";
import NotFoundPage from "../pages/NotFoundPage.js";
import TeamInfo from "./team/TeamInfo.js";
import TeamIntro from "./team/TeamIntro.js";
import Test from "../Test.js";
import Ttest from "../Ttest.js";
import MainPage from "../pages/mainPage.js";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/test" exact component={Test} />
        <Route path="/" exact component={MainPage} />
        {/*<Route
          path="/team"
          render={() => {
            return (
              <div>
                <TeamInfo />
                <Route
                  path="/team/teaminfo"
                  render={() => {
                    return (
                      <div>
                        <TeamIntro />
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        />*/}
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
