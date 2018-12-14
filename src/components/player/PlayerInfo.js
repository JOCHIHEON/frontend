import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PlayerDetail from "./PlayerDetail";
import PlayerRank from "./PlayerRank";
import PlayerCard from "./PlayerCard";

import { Breadcrumb, BreadcrumbItem } from "mdbreact";

class PlayerInfo extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/player/detail"
          exact
          render={() => (
            <React.Fragment>
              <h3>
                <Breadcrumb>
                  <BreadcrumbItem>선수상세</BreadcrumbItem>
                </Breadcrumb>
              </h3>
              <PlayerDetail />
            </React.Fragment>
          )}
        />
        <Route path="/player/detail/:id" exact component={PlayerCard} />
        <Route path="/player/rank" component={PlayerRank} />
      </Switch>
    );
  }
}

export default PlayerInfo;
