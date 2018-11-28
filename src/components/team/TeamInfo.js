import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "mdbreact";
import { Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import { ListGroup, ListGroupItem, Container } from "mdbreact";
import { Route, Switch } from "react-router-dom";
import TeamIntro from "./TeamIntro";

class TeamInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card className="mb-5">
          <CardBody
            id="breadcrumb"
            className="d-flex align-items-center justify-content-between"
          >
            <Breadcrumb>
              <BreadcrumbItem>구단정보</BreadcrumbItem>
              <BreadcrumbItem active>원주 DB</BreadcrumbItem>
            </Breadcrumb>
          </CardBody>
          <Container>
            <Row>
              <Col md="2">
                <ListGroup>
                  <ListGroupItem href="/team/intro" active>
                    원주DB
                  </ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">서울삼성</ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">서울SK</ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">창원LG</ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">고양오리온</ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">
                    인천전자랜드
                  </ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">전주KCC</ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">안양KGC</ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">부산KT</ListGroupItem>
                  <ListGroupItem href="/team/intro:teamno">
                    울산현대모비스
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md="10">
                <Card className="mb-5">
                  <Breadcrumb>
                    <Col>
                      <Link to="/team/intro">팀소개</Link>
                    </Col>
                    <Col>
                      <Link to="/team/schedule">일정 및 기록</Link>
                    </Col>
                    <Col>
                      <Link to="/team/member">선수소개</Link>
                    </Col>
                    <Col>
                      <Link to="/team/recorde">팀내 선수 기록</Link>
                    </Col>
                  </Breadcrumb>
                  <Route path="/team/intro" component={TeamIntro} />
                  <CardBody />
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </React.Fragment>
    );
  }
}

export default TeamInfo;
