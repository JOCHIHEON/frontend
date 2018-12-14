import React, { Component } from "react";
import { FormInline, Button, Fa, CardHeader, CardBody } from "mdbreact";
import { Card, Breadcrumb, BreadcrumbItem, CardText } from "mdbreact";
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

class PlayerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
    this.options = {
      defaultSortName: "team_code", // default sort column name
      defaultSortOrder: "desc" // default sort order
    };
  }

  componentDidMount() {
    this.PlayerDetail();
  }

  PlayerDetail() {
    return axios.get("http://rbd.javajs.net:8100/player", {}).then(res => {
      const players = res.data;
      this.setState({ players });
    });
  }

  renderPaginationPanel = props => {
    return <div>{props.components.pageList}</div>;
  };

  render() {
    // const players = this.state.players.map((player, i) => (
    //   <tr>
    //     <td>
    //       <a>
    //         <h6>{player.player_name}</h6>
    //         <p>[{player.team_code}]</p>
    //       </a>
    //     </td>
    //   </tr>
    // ));
    const options = {
      paginationPanel: this.renderPaginationPanel
    };
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>선수상세</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Card md="10">
          <CardBody>
            <h4>선수목록</h4>
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
                thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                isKey={true}
              >
                선수명
              </TableHeaderColumn>
              <TableHeaderColumn>팀명</TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default PlayerDetail;
