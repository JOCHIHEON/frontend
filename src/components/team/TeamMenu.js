import React, { Component } from "react";
import { Breadcrumb, Col, NavLink } from "mdbreact";

class TeamMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Breadcrumb>
          <Col>
            <NavLink to="/team/intro" {...1}>
              팀소개
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/team/schedule">일정 및 기록</NavLink>
          </Col>
          <Col>
            <NavLink to="/team/member">선수소개</NavLink>
          </Col>
          <Col>
            <NavLink to="/team/recorde">팀내 선수 기록</NavLink>
          </Col>
        </Breadcrumb>
      </div>
    );
  }
}

export default TeamMenu;
