import React, { Component } from "react";
import { Card, CardBody, Breadcrumb, BreadcrumbItem, CardText } from "mdbreact";
import { Row, Col, CardImage, CardTitle, Button } from "mdbreact";
import axios from "axios";
<<<<<<< HEAD
=======
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

function player_nameFormatter(cell, row) {
  return `<a href="/player/detail/${cell}">${cell}</a>`;
}
function team_codeFormatter(cell, row) {
  return `<a href="/player/detail/${cell}">상세보기</a>`;
}
>>>>>>> init
class PlayerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this.PlayerDetail();
  }
  PlayerDetail() {
<<<<<<< HEAD
    const tCode = this.props.tCode;
    const pNum = this.props.pNum;
    return axios
      .get("https://rbd.javajs.net:8100/player/" + tCode + "/" + pNum, {})
      .then(res => {
        const players = res.data;
        this.setState({ players });
      });
=======
    return axios.get("http://rbd.javajs.net:8100/player", {}).then(res => {
      const players = res.data;
      this.setState({ players });
      console.log(this.state.players);
    });
>>>>>>> init
  }
  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>선수상세</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Card md="10">
          <CardBody>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <CardImage
                          className="img-fluid mx-auto"
                          src={
                            "http://kbl.or.kr/images/playersPhoto/" +
                            this.props.pNum +
                            ".jpg?ver=0.1"
                          }
                          waves
                        />
                      </Col>
                      <Col>
                        <CardTitle>타이틀</CardTitle>
                        <CardText>
                          성명 : {this.state.players.player_name}
                          <br />
                          생년월일 : {this.state.players.player_birth}
                          <br />
                          신장 : {this.state.players.player_height}
                          <br />
                          소속 : {this.state.players.player_name}
                          <br />
                          포지션/배번 : {this.state.players.player_position}/
                          {this.state.players.player_number}
                          <br />
                          출신교 : {this.state.players.player_background}
                          <br />
                        </CardText>
                        <Button href="/player/detail">
                          전체 선수 목록으로
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </React.Fragment>
=======
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
            <TableHeaderColumn
              dataField="team_code"
              dataFormat={team_codeFormatter}
            />
          </BootstrapTable>
        </CardBody>
      </Card>
>>>>>>> init
    );
  }
}

export default PlayerDetail;
