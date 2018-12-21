import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "mdbreact";
import axios from "axios";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

function getCaret(direction) {
  if (direction === "asc") {
    return <span>▲</span>;
  }
  if (direction === "desc") {
    return <span>▼</span>;
  }
  return <span>▲/▼</span>;
}

function player_nameFormatter(cell, row) {
  return `<a href="/player/detail/${cell}">${cell}</a>`;
}
class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
    this.options = {
      defaultSortName: "player_name", // default sort column name
      defaultSortOrder: "desc" // default sort order
    };
  }

  componentDidMount() {
    this.PlayerList();
  }

  PlayerList() {
    return axios.get("https://rbd.javajs.net:8100/player", {}).then(res => {
      const players = res.data;
      this.setState({ players });
    });
  }

  renderPaginationPanel = props => {
    return <div>{props.components.pageList}</div>;
  };

  render() {
    const options = {
      paginationPanel: this.renderPaginationPanel
    };
    return (
      <Card md="10">
        <CardHeader>
          <h5>선수목록</h5>
        </CardHeader>
        <CardBody>
          <BootstrapTable
            ref="table"
            data={this.state.players}
            pagination={true}
            search={true}
            options={options}
            hover
          >
            <TableHeaderColumn
              dataField="player_name"
              dataFormat={player_nameFormatter}
              thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
              isKey={true}
              caretRender={getCaret}
              dataSort
            >
              선수명
            </TableHeaderColumn>
          </BootstrapTable>
        </CardBody>
      </Card>
    );
  }
}

export default PlayerList;
