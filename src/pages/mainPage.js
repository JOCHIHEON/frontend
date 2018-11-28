import React, { Component } from "react";
import { Container, Iframe, Row, Col, Card } from "mdbreact";
import MainPlayerRank from "../components/main/MainPlayerRank";
import MainTeamRank from "../components/main/MainTeamRank";
import MainSchedule from "../components/main/MainSchedule";

class mainPage extends Component {
  render() {
    return (
      <Container className="text-center">
        <Row>
          <Col md="3">
            <Row>
              <MainSchedule />
            </Row>
            <Row>MainTeamRank</Row>
          </Col>
          <Col md="9">
            <Row>
              <div>
                <div>
                  <Iframe
                    height={250}
                    src="https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=95D34E133DE47E7FFF5AA1F9C4B3F1CB3996&outKey=V122a288ee90aa2656a5189ad8acc5dcb98b16984ee9af152123889ad8acc5dcb98b1&controlBarMovable=true&jsCallable=true&isAutoPlay=true&skinName=tvcast_white"
                  />
                </div>
              </div>
            </Row>
            <Row>
              <Card>
                <MainPlayerRank />
              </Card>
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
