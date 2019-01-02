import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Card } from "mdbreact";
import FanBoardTop from "../components/board/FanBoardTop";
import FanBoard from "../components/board/FanBoard";
import FreeBoardTop from "../components/board/FreeBoardTop";
import FreeBoard from "../components/board/FreeBoard";
import QnABoard from "../components/board/QnABoard";
import QnABoardTop from "../components/board/QnABoardTop";
import BoardWrite from "../components/board/BoardWrite";
import BoardView from "../components/board/BoardView";

class BoardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="mb-5">
          <Route path="/board" exact component={FreeBoardTop} />
          <Route path="/board" exact component={FreeBoard} />
          <Route path="/board/free" exact component={FreeBoardTop} />
          <Route path="/board/free" exact component={FreeBoard} />
          <Route path="/board/free/write" component={BoardWrite} />
          <Route path="/board/free/view" component={BoardView} />
          <Route path="/board/fan" component={FanBoardTop} />
          <Route path="/board/fan" component={FanBoard} />
          <Route path="/board/qna" component={QnABoardTop} />
          <Route path="/board/qna" component={QnABoard} />
        </Card>
      </React.Fragment>
    );
  }
}

export default BoardPage;
