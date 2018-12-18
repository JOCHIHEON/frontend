import React, { Component } from "react";
import { Card, CardBody, Breadcrumb, BreadcrumbItem, CardText } from "mdbreact";
import { Row, Col, CardImage, CardTitle, Button } from "mdbreact";
import axios from "axios";
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
    const tCode = this.props.tCode;
    const pNum = this.props.pNum;
    return axios
      .get("https://rbd.javajs.net:8100/player/" + tCode + "/" + pNum, {})
      .then(res => {
        const players = res.data;
        this.setState({ players });
      });
  }
  render() {
    return (
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
    );
  }
}

export default PlayerDetail;
