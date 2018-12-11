import React, { Component } from "react";
import { Breadcrumb, Col } from "mdbreact";

class TeamMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: {},
      schedule: {},
      member: {},
      record: {}
    };
  }
  componentDidMount() {
    const tCode = this.props.tCode;
    this.setState({
      intro: "/team/" + tCode + "/intro",
      schedule: "/team/" + tCode + "/schedule",
      member: "/team/" + tCode + "/member",
      record: "/team/" + tCode + "/record"
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <Col>
            <a href={this.state.intro}>팀소개</a>
          </Col>
          <Col>
            <a href={this.state.schedule}>일정 및 기록</a>
          </Col>
          <Col>
            <a href={this.state.member}>선수소개</a>
          </Col>
          <Col>
            <a href={this.state.record}>팀내 선수 기록</a>
          </Col>
        </Breadcrumb>
      </div>
    );
  }
}

export default TeamMenu;
