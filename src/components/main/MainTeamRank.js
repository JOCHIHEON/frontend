import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  Badge,
  Button,
  ListGroupItem,
  FormInline
} from "mdbreact";

const MainTeamRank = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        TEAM RANGKING
        <Button href="/record/rank" size="sm" outline color="blue-grey">
          +more
        </Button>
      </CardHeader>
      <CardBody>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Badge color="danger-color" pill className="pull-left">
              1
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_10.gif" />
              울산모비스
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="danger-color" pill className="pull-left">
              2
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_06.gif" />
              부산KT
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="success-color" pill className="pull-left">
              3
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_65.gif" />
              인천전자랜드
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="success-color" pill className="pull-left">
              4
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_50.gif" />
              창원LG
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="success-color" pill className="pull-left">
              5
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_70.gif" />
              안양KGC
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="success-color" pill className="pull-left">
              6
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_60.gif" />
              전주KCC
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="primary-color" pill className="pull-left">
              7
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_55.gif" />
              서울SK
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="primary-color" pill className="pull-left">
              8
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_16.gif" />
              원주DB
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="primary-color" pill className="pull-left">
              9
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_30.gif" />
              고양오리온
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="primary-color" pill className="pull-left">
              10
            </Badge>
            <div>
              <img src="https://www.dbpromy.co.kr/1819/images/t_35.gif" />
              서울삼성
            </div>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default MainTeamRank;
