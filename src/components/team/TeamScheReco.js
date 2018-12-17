import React, { Component } from "react";
import axios from "axios";
import { Card, CardBody, CardHeader, CardTitle, CardText } from "mdbreact";

class TeamScheReco extends Component {
  constructor(props) {
    super(props);
    this.state = { text: [] };
  }
  componentDidMount() {
    this.TeamScheReco();
  }
  TeamScheReco() {
    const tCode = this.props.tCode;
    return axios.get("https://rbd.javajs.net:8100/", {}).then(res => {
      const text = res.data;
      this.setState({ text });
    });
  }
  render() {
    return (
      <React.Fragment>
        <CardHeader>
          <CardTitle>일정 및 기록</CardTitle>
        </CardHeader>
        <CardBody>바디</CardBody>
      </React.Fragment>
    );
  }
}

export default TeamScheReco;
