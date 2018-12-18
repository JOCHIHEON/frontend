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

class TeamRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
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
    return axios.get("https://rbd.javajs.net:8100/wlrs", {}).then(res => {
      const teams = res.data;
      this.setState({ teams });
    });
  }
  render() {
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
            <Card className="mb-5 mt-3">
              <BootstrapTable
                ref="table"
                data={this.state.teams}
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
                  width="7%"
                >
                  순위
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="teamName"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                  width="30%"
                >
                  팀
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="win"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                  width="7%"
                >
                  승
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="lose"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                  width="7%"
                >
                  패
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="shift"
                  thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                  width="7%"
                >
                  승률
                </TableHeaderColumn>
              </BootstrapTable>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TeamRank;
