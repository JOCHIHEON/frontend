import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardTitle, CardText } from "mdbreact";
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
    const tCode = this.props.tCode;
    return axios
      .get("https://rbd.javajs.net:8100/player/" + tCode, {})
      .then(res => {
        const members = res.data;
        this.setState({ members });
      });
  }
  render() {
    const members = this.state.members.map((member, i) => (
      <Card className="mt-3 ml-3 mr-3 h-auto d-inline-block">
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
    ));
    return (
      <React.Fragment>
        <CardHeader>
          <CardTitle>선수소개</CardTitle>
        </CardHeader>
        <CardBody>{members}</CardBody>
      </React.Fragment>
    );
  }
}

export default TeamMember;
