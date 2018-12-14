import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Card, Breadcrumb, BreadcrumbItem } from "mdbreact";
import PlayerDetail from "./PlayerDetail";
import PlayerRank from "./PlayerRank";

class PlayerInfo extends Component {
  render() {
    return (
      <Switch>
        <Route path="/player/detail" component={PlayerDetail} />
        <Route path="/player/rank" component={PlayerRank} />
      </Switch>
    );
  }
}

export default PlayerInfo;
