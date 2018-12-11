import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Card } from "mdbreact";
import TeamInfo from "../components/team/TeamInfo";

class TeamPage extends Component {
  render() {
    return (
      <Card className="mb-5">
        <Switch>
          <Route path="/team" component={TeamInfo} />
        </Switch>
      </Card>
    );
  }
}

export default TeamPage;
