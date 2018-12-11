import React from "react";
import Calendar from "./Calendar.jsx";
import "./Schedule.css";
import {
  Card,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "mdbreact";

class Schedule extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card className="mb-5">
          <CardBody
            id="breadcrumb"
            className="d-flex align-items-center justify-content-between"
          >
            <Breadcrumb>
              <BreadcrumbItem>일정/결과</BreadcrumbItem>
              <BreadcrumbItem active>경기일정</BreadcrumbItem>
            </Breadcrumb>
          </CardBody>
          <Container>
            <Row>
              <Col md="2">
                <ListGroup>
                  <ListGroupItem href="/schedule" active>
                    경기일정
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md="10">
                <Card className="Schedule mb-5">
                  <header>
                    <div id="logo">
                      <span className="icon">date_range</span>
                      <span>
                        KBL<b>일정</b>
                      </span>
                    </div>
                  </header>
                  <Card>
                    <Calendar />
                  </Card>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </React.Fragment>
    );
  }
}

export default Schedule;
