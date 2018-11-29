import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  Badge,
  Fa,
  ListGroupItem
} from "mdbreact";

const MainTeamRank = () => {
  return (
    <Card className="mb-4">
      <CardHeader>TeamRank</CardHeader>
      <CardBody>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Badge color="danger-color" pill className="pull-left">
              1
            </Badge>
            울산모비스
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="danger-color" pill className="pull-left">
              2
            </Badge>
            부산KT
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="success-color" pill className="pull-left">
              3
            </Badge>
            인천전자랜드
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="success-color" pill className="pull-left">
              4
            </Badge>
            창원LG
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="success-color" pill className="pull-left">
              5
            </Badge>
            안양KGC
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="success-color" pill className="pull-left">
              6
            </Badge>
            전주KCC
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="primary-color" pill className="pull-left">
              7
            </Badge>
            서울SK
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="primary-color" pill className="pull-left">
              8
            </Badge>
            원주DB
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="primary-color" pill className="pull-left">
              9
            </Badge>
            고양오리온
          </ListGroupItem>
          <ListGroupItem>
            <Badge color="primary-color" pill className="pull-left">
              10
            </Badge>
            서울삼성
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default MainTeamRank;
