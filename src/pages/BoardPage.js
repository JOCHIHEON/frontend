import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import FreeBoard from "../components/board/FreeBoard";
import FanBoard from "../components/board/FanBoard";
import QnABoard from "../components/board/QnABoard";

class BoardPage extends Component {
  render() {
    return (
      <Switch>
        <Route path="/board/free" component={FreeBoard} />
        <Route path="/board/fan" component={FanBoard} />
        <Route path="/board/qna" component={QnABoard} />
      </Switch>
    );
  }
}
export default BoardPage;
