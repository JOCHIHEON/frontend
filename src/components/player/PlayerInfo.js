import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PlayerList from "./PlayerList";
import PlayerRank from "./PlayerRank";
import PlayerDetail from "./PlayerDetail";

import { Breadcrumb, BreadcrumbItem } from "mdbreact";

class PlayerInfo extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/player/detail"
          exact
          render={props => (
            <React.Fragment>
              <h3>
                <Breadcrumb>
                  <BreadcrumbItem>선수상세</BreadcrumbItem>
                </Breadcrumb>
              </h3>
              <PlayerList />
            </React.Fragment>
          )}
        />
        <Route
          path="/player/detail/:id"
          exact
          render={props => <PlayerDetail {...props} tCode={16} pNum={290421} />}
        />
        <Route path="/player/rank" component={PlayerRank} />
      </Switch>
    );
  }
}
export default PlayerInfo;
