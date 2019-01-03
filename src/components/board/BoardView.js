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
      fre_no: window.location.href.substring(
        window.location.href.lastIndexOf("/") + 1
      ),
      view: [],
      ui_nick: JSON.parse(localStorage.getItem("user")).ui_nick
    };
  }
  componentDidMount() {
    this.BoardView();
  }
  BoardView() {
    return axios
      .get("https://rbd.javajs.net:8100/freeboard/" + this.state.fre_no, {})
      .then(res => {
        const view = res.data;
        console.log(view);
        this.setState({ view });
      });
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
          <form className="mx-3 grey-text" noValidate>
            <div className="text-right">
              <Button size="sm">수정</Button>
              <Button size="sm">삭제</Button>
              <Button size="sm" color="secondary" href="/board/free">
                목록
              </Button>
            </div>
            <CardHeader className="border solid 1px">
              <Row>
                <h4>{this.state.view.fre_title}</h4>
              </Row>
              <Row>
                <Col className="mt-2 text-left" md="4">
                  <small>작성자:</small>
                  <span> </span>
                  <small>
                    <b>{this.state.view.ui_nick}</b>
                  </small>
                </Col>
                <Col className="mt-2 text-right" md="8">
                  <small>{this.state.view.fre_moddat}</small>
                  <span> </span>
                  <small>조회:{this.state.view.fre_lookupcnt}</small>
                </Col>
              </Row>
              <Row />
            </CardHeader>
            <CardBody className="border solid 1px">
              <div className=" text-left" style={{ minHeight: "350px" }}>
                <p>{this.state.view.fre_content}</p>
              </div>
            </CardBody>
          </form>
          <Row className="mt-3">
            <Col className="mt-2" md="3">
              <p>{this.state.ui_nick}</p>
            </Col>
            <Col className="text-left form-control">댓글댓글댓글</Col>
            <Col className="mt-2" md="3">
              <Button>댓글쓰기</Button>
            </Col>
          </Row>
        </CardBody>
      </React.Fragment>
    );
  }
}

export default BoardView;
