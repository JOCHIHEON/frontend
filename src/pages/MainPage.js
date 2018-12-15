import React, { Component } from "react";
import { Row, Col } from "mdbreact";
import MainPlayerRank from "../components/main/MainPlayerRank";
import MainTeamRank from "../components/main/MainTeamRank";
import MainSchedule from "../components/main/MainSchedule";
import MainVideo from "../components/main/MainVideo";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md="3">
            <Row>
              <MainTeamRank />
            </Row>
          </Col>
          <Col md="9">
            <Row>{/*<MainSchedule />*/}</Row>
            <Row>
              <MainVideo />
            </Row>
            <Row>
              <MainPlayerRank />
            </Row>
          </Col>
        </Row>
        <Row>무비클립</Row>
        <Row>뉴스</Row>
      </div>
    );
  }
}

export default MainPage;
