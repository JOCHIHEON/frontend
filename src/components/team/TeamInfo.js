import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "mdbreact";
import { Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import { ListGroup, ListGroupItem, Container } from "mdbreact";
import TeamInfoCard from "./TeamInfoCard";

const teams = [
  {
    teamName: "원주 DB 프로미",
    teamImg: "http://kbl.or.kr/images/teams/logo_16.gif"
    /*teamOwner: "김정남",
    teamOwnerTmp: "-",
    teamLeader: "신해용",
    teamDirector: "이상범",
    teamCoach: "이효상, 김성철",
    teamAdress: "서울시 강남구 테헤란로 432 DB금융센터 15층",
    teamFoundation: "원주 / DB손해보험",
    teamContact: "02)3011-3176 / 0505)181-0092"*/
  },
  {
    teamName: "서울 삼성 썬더스",
    teamImg:
      "http://kbl.or.kr/images/teams/logo_35.gif" /*
    teamOwner: "김정남",
    teamOwnerTmp: "-",
    teamLeader: "신해용",
    teamDirector: "이상범",
    teamCoach: "이효상, 김성철",
    teamAdress: "서울시 강남구 테헤란로 432 DB금융센터 15층",
    teamFoundation: "원주 / DB손해보험",
    teamContact: "02)3011-3176 / 0505)181-0092"*/
  }
];

class TeamInfo extends React.Component {
  render() {
    return (
      /*<React.Fragment>
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
                  <ListGroupItem href="/board/fan/1" active>
                    원주DB
                  </ListGroupItem>
                  <ListGroupItem href="/board/fan/1">서울삼성</ListGroupItem>
                  <ListGroupItem href="/board/fan/1">서울SK</ListGroupItem>
                  <ListGroupItem href="/board/fan/1">창원LG</ListGroupItem>
                  <ListGroupItem href="/board/fan/1">고양오리온</ListGroupItem>
                  <ListGroupItem href="/board/fan/1">
                    인천전자랜드
                  </ListGroupItem>
                  <ListGroupItem href="/board/fan/1">전주KCC</ListGroupItem>
                  <ListGroupItem href="/board/fan/1">안양KGC</ListGroupItem>
                  <ListGroupItem href="/board/fan/1">부산KT</ListGroupItem>
                  <ListGroupItem href="/board/fan/1">
                    울산현대모비스
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md="10">
                <Card className="mb-5">
                  <Breadcrumb>
                    <Col>
                      <Link to="/team/teaminfo">팀소개</Link>
                    </Col>
                    <Col>
                      <Link to="/team/teamschedule">일정 및 기록</Link>
                    </Col>
                    <Col>
                      <Link to="/team/teammember">선수소개</Link>
                    </Col>
                    <Col>
                      <Link to="/team/teamrecorde">팀내 선수 기록</Link>
                    </Col>
                  </Breadcrumb>
                  <CardBody>
                    
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </React.Fragment>*/
      <div>
        {teams.map(team => {
          return (
            <TeamInfoCard teamName={team.teamName} teamImg={team.teamImg} />
          );
        })}
      </div>
    );
  }
}

export default TeamInfo;
