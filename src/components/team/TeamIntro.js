import React from "react";
import { Button, CardImage, CardTitle, CardText, CardBody } from "mdbreact";
import { Row, Col, CardHeader } from "mdbreact";
import axios from "axios";

class TeamIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: {} };
  }
  componentDidMount() {
    this.TeamIntro();
  }
  TeamIntro() {
    const tCode = this.props.tCode;
    return axios
      .get("http://rbd.javajs.net:8100/team/" + tCode, {})
      .then(res => {
        const text = res.data;
        this.setState({ text });
      });
  }
  render() {
    return (
      <React.Fragment>
        <CardHeader>
          <CardTitle>팀소개</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Row>
                <Col>
                  <CardImage
                    className="img-fluid mx-auto"
                    src={this.props.teamImg}
                    waves
                  />
                </Col>
                <Col>
                  <CardTitle>{this.state.text.team_name}</CardTitle>
                  <CardText>
                    구단주 : {this.state.text.team_owner}
                    <br />
                    구단주 대행 : {this.state.text.team_reowner}
                    <br />
                    단장 : {this.state.text.team_leader}
                    <br />
                    감독 : {this.state.text.team_director}
                    <br />
                    코치 : {this.state.text.team_coach}
                    <br />
                    주소 : {this.state.text.team_address}
                    <br />
                    연고지/모기업 : {this.state.text.team_company}
                    <br />
                  </CardText>
                  <Button href="#">구단 홈페이지로 가기</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </React.Fragment>
    );
  }
}
export default TeamIntro;
