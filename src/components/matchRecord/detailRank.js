import React, { Component } from "react";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { ListGroup, ListGroupItem, Col, Row, Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import axios from "axios";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

function getCaret(direction) {
  if (direction === "asc") {
    return <span>▲</span>;
  }
  if (direction === "desc") {
    return <span>▼</span>;
  }
  return <span>▲/▼</span>;
}

class PartTeamRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
    this.options = {
      defaultSortName: "rank", // default sort column name
      defaultSortOrder: "asc" // default sort order
    };
  }

  componentDidMount() {
    this.PlayerList();
  }

  PlayerList() {
    return axios
      .get("https://rbd.javajs.net:8100/team/16/2018-2019", {})
      .then(res => {
        const teamDetail = res.data.teamDetail;
        console.log(teamDetail);
        this.setState({ details: teamDetail });
      });
  }
  render() {
    console.log(this.state.teamDetail);
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
            <Card className="mb-5 mt-3">
              <h4>
                <div className="sub_title">
                  <CardBody>경기기록</CardBody>
                </div>
              </h4>
              <ListGroup>
                <ListGroupItem href="/record/rank">팀 순위</ListGroupItem>
                <ListGroupItem href="/record/versus">상대전적</ListGroupItem>
                <ListGroupItem href="/record/detail" active>
                  부문별 팀순위
                </ListGroupItem>
                <ListGroupItem href="#">공수력 비교</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col md="9">
            <Card className="mb-5 mt-3">
              <BootstrapTable
                ref="table"
                data={this.state.details}
                options={this.options}
                hover
              >
                <TableHeaderColumn
                  dataField="rank"
                  thStyle
                  isKey={true}
                  caretRender={getCaret}
                  dataSort
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                >
                  순위
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="teamName"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                >
                  팀
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="teamde_ft"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                >
                  득점
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="teamde_reb"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                >
                  리바운드
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="teamde_assist"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                >
                  어시스트
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="teamde_stl"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                >
                  스틸
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="teamde_blk"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                >
                  블록
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="shift"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                >
                  블록
                </TableHeaderColumn>
              </BootstrapTable>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default PartTeamRank;
