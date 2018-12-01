import React, { Component } from "react";
import {
  Container,
  Iframe,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "mdbreact";
import MainPlayerRank from "../components/main/MainPlayerRank";
import MainTeamRank from "../components/main/MainTeamRank";
import MainSchedule from "../components/main/MainSchedule";
import MainVideo from "../components/main/MainVideo";

class mainPage extends Component {
  render() {
    return (
      <Container className="text-center">
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
              <MainSchedule />
            </Row>
            <Row>
              <MainPlayerRank />
            </Row>
          </Col>
        </Row>
        <Row>무비클립</Row>
        <Row>뉴스</Row>
      </Container>
    );
  }
}

export default mainPage;
