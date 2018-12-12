import React, { Component } from "react";
import { Card, Breadcrumb, BreadcrumbItem } from "mdbreact";

class PlayerInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>구단정보</BreadcrumbItem>
            <BreadcrumbItem active>원주DB</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Card md="10">카드바디</Card>
      </React.Fragment>
    );
  }
}

export default PlayerInfo;
