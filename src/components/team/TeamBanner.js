import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Link } from "react-router-dom";
import { NavbarNav, NavItem, NavLink } from "mdbreact";
import TeamIntro from "./TeamIntro";

class TeamBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavbarNav>
          <NavItem>
            <NavLink to={this.props.link} className="fbd_tname">
              <img src={this.props.teamImg} width="50px" height="50px" />
              <br />
              {this.props.teamName}
            </NavLink>
          </NavItem>
        </NavbarNav>
      </React.Fragment>
    );
  }
}

export default TeamBanner;
