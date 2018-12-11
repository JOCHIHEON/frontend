import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Col,
  Row
} from "mdbreact";
import axios from "axios";

class TeamMember extends Component {
  constructor(props) {
    super(props);
    this.state = { members: [] };
  }
  componentDidMount() {
    this.TeamMember();
  }
  TeamMember() {
    return axios.get("http://rbd.javajs.net:8100/player/16", {}).then(res => {
      const members = res.data;
      this.setState({ members });
      console.log(this.state.members[0].player_no);
    });
  }
  render() {
    const members = this.state.members.map((member, i) => (
      <Col>
        <Card className="mt-3 ml-3 mr-3">
          <CardBody>
            <img
              className="rounded-circle"
              src={
                "http://kbl.or.kr/images/playersPhoto/" +
                member.player_no +
                ".jpg?ver=0.1"
              }
            />
            <CardText>
              {member.player_name}
              {member.player_position}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    ));
    return (
      <div className="mt-3 ml-3 mr-3">
        <CardHeader>
          <CardTitle>선수소개</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Row>{members}</Row>
          </Row>
        </CardBody>
      </div>
    );
  }
}

export default TeamMember;
