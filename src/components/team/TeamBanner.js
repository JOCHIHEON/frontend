import React, { Component } from "react";
import { NavbarNav, NavItem } from "mdbreact";

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
            <a href={this.props.link} className="fbd_tname">
              <img src={this.props.teamImg} width="70%" height="70%" />
              <br />
              {this.props.teamName}
            </a>
          </NavItem>
        </NavbarNav>
      </React.Fragment>
    );
  }
}

export default TeamBanner;
