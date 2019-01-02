import React, { Component } from "react";
import { Col, Row } from "mdbreact";
import { Button, Card, CardHeader, CardBody } from "mdbreact";
import { FormInline, MDBIcon } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import axios from "axios";

class BoardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
        <CardBody
          id="breadcrumb"
          className="d-flex align-items-center justify-content-between"
        >
          <Breadcrumb>
            <BreadcrumbItem active>
              <a href="/board/free">커뮤니티</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/board/free">자유게시판</a>
            </BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
        <CardBody className="mb-5">
          <form
            className="mx-3 grey-text"
            noValidate
          >
            <CardHeader className="mt-3">
              <Row>
                <Col className="mt-2" md="1">
                  <label htmlFor="title">제목</label>
                </Col>
                <Col md="11">
                  <input
                    placeholder="제목"
                    name="title"
                    className="form-control"
                    type="text"
                    id="title"
                    disabled
                  />
                </Col>
              </Row>
              <Row>
                
              </Row>
            </CardHeader>
            <CardBody>
              <label>내용</label>
                <div
                    name="content"
                    className="form-control"
                    style={{ minHeight: "500px" }}                
                >
                    <p>내용</p>
                </div>
            </CardBody>
            <div>
              <Button color="secondary" href="/board/free">
                목록으로
              </Button>
            </div>
          </form>
        </CardBody>
      </React.Fragment>
        )
    }
}

export default BoardView;

