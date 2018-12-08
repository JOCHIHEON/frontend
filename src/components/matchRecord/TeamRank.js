import React, { Component } from "react";

import { ListGroup, ListGroupItem, Col, Row, Card, CardBody } from "mdbreact";
import { Table, TableBody, TableHead } from "mdbreact";
import { Breadcrumb, BreadcrumbItem, Button } from "mdbreact";
import axios from "axios";

class TeamRank extends Component {
  constructor(props) {
    super(props);
    this.state = { board: [] };
  }
  componentDidMount() {
    this.FreeBoard();
  }
  FreeBoard() {
    return axios.get("http://rbd.javajs.net:8100/freeboard", {}).then(res => {
      const board = res.data;
      this.setState({ board });
    });
  }
  render() {
    const rank = this.state.board.map((item, i) => (
      <tr>
        <td>{item.fre_no}</td>
        <td>
          <a>{item.fre_title}</a>
        </td>
        <td>{item.ui_no}</td>
        <td>{item.fre_moddat}</td>
        <td>{item.fre_lookupcnt}</td>
        <td>{item.fre_like}</td>
      </tr>
    ));
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>경기기록</BreadcrumbItem>
            <BreadcrumbItem>팀순위</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Row>
          <Col md="3">
            <Card>
              <h4>
                <div className="sub_title">
                  <CardBody>경기기록</CardBody>
                </div>
              </h4>
              <ListGroup>
                <ListGroupItem href="/record/rank" active>
                  팀 순위
                </ListGroupItem>
                <ListGroupItem href="/record/versus">상대전적</ListGroupItem>
                <ListGroupItem href="#">부문별 팀순위</ListGroupItem>
                <ListGroupItem href="#">공수력 비교</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col md="9">
            <Card className="mb-5">
              <Table className="table table-hover">
                <TableHead color="red lighten-4">
                  <tr>
                    <th>순위</th>
                    <th>팀</th>
                    <th>경기수</th>
                    <th>승</th>
                    <th>패</th>
                    <th>승률</th>
                  </tr>
                </TableHead>
                <TableBody>{rank}</TableBody>
              </Table>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TeamRank;
