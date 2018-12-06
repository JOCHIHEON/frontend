import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  FormInline,
  Card,
  CardBody
} from "mdbreact";
import "./RecordPage.css";
import { Breadcrumb, BreadcrumbItem, Button } from "mdbreact";
class RecordPage extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>경기기록</BreadcrumbItem>
            <BreadcrumbItem>팀순위</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Row>
          <Col md="3">
            <Card>
              <h4>
                <div className="sub_title">
                  <CardBody>경기기록</CardBody>
                </div>
              </h4>
              <ListGroup>
                <ListGroupItem href="#" active>
                  팀 순위
                </ListGroupItem>
                <ListGroupItem href="#">상대전적</ListGroupItem>
                <ListGroupItem href="#">부문별 팀순위</ListGroupItem>
                <ListGroupItem href="#">공수력 비교</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col md="9">데이터</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default RecordPage;
