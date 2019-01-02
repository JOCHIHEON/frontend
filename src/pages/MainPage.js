import React, { Component } from "react";
import { Row, Col } from "mdbreact";
import MainPlayerRank from "../components/main/MainPlayerRank";
import MainTeamRank from "../components/main/MainTeamRank";
import MainVideo from "../components/main/MainVideo";
import {MDBJumbotron} from "mdbreact";

class MainPage extends Component {
  render() {
    return (
      <MDBJumbotron>
        <Row>
          <Col md="3">
            <Row>
              <MainTeamRank />
            </Row>
          </Col>
          <Col md="9">
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
      </MDBJumbotron>
    );
  }
}

export default MainPage;
