import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "mdbreact";
import { Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import { FormInline } from "mdbreact";
import { ListGroup, ListGroupItem, Container } from "mdbreact";
import { Route, Switch } from "react-router-dom";
import TeamInfo1 from "./TeamInfo1";
import TeamIntro from "./TeamIntro";

class TeamInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>구단정보</BreadcrumbItem>
            <BreadcrumbItem active>원주DB</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Card md="10">
          <FormInline m="5">
            <Link to="/teaminfo/1" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/215.png"
                width="50px"
                height="50px"
              />
              <br />
              DB
            </Link>
            <Link to="/teaminfo/2" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/212.png"
                width="50px"
                height="50px"
              />
              <br />
              삼성
            </Link>
            <Link to="/teaminfo/3" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/211.png"
                width="50px"
                height="50px"
              />
              <br />
              SK
            </Link>
            <Link to="/teaminfo/4" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/218.png"
                width="50px"
                height="50px"
              />
              <br />
              LG
            </Link>
            <Link to="/teaminfo/5" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/209.png"
                width="50px"
                height="50px"
              />
              <br />
              오리온스
            </Link>
            <Link to="/teaminfo/6" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/216.png"
                width="50px"
                height="50px"
              />
              <br />
              전자랜드
            </Link>
            <Link to="/teaminfo/7" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/217.png"
                width="50px"
                height="50px"
              />
              <br />
              KCC
            </Link>
            <Link to="/teaminfo/8" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/213.png"
                width="50px"
                height="50px"
              />
              <br />
              KGC
            </Link>
            <Link to="/teaminfo/9" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/210.png"
                width="50px"
                height="50px"
              />
              <br />
              KT
            </Link>
            <Link to="/teaminfo/10" className="fbd_tname">
              <img
                src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/214.png"
                width="50px"
                height="50px"
              />
              <br />
              모비스
            </Link>
          </FormInline>

          <Breadcrumb>
            <Col>
              <Link to="teaminfo/1">팀소개</Link>
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
          <Route path="/teaminfo/1" component={TeamIntro} />
          <CardBody />
        </Card>
      </React.Fragment>
    );
  }
}

export default TeamInfo;
