import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Card } from "mdbreact";
import PlayerInfo from "../components/player/PlayerInfo";

class PlayerPage extends Component {
  render() {
    return (
      <Card className="mb-5">
        <Switch>
          <Route path="/player" component={PlayerInfo} />
        </Switch>
      </Card>
    );
  }
}

export default PlayerPage;
