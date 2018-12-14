import React, { Component } from "react";
import { CardHeader, CardTitle, CardBody } from "mdbreact";
import { Card, Breadcrumb, BreadcrumbItem } from "mdbreact";

class PlayerRank extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>선수상세</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Card md="10">
          <CardBody>바디</CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default PlayerRank;
