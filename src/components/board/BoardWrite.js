import React, { Component } from "react";
import { Col, Row } from "mdbreact";
import { Button, Card, CardHeader, CardBody } from "mdbreact";
import { FormInline, MDBIcon } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import axios from "axios";

class BoardWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      formErrors: {
        title: "",
        content: ""
      },
      formValidity: {
        title: false,
        content: false
      },
      canSubmit: false,
      user: JSON.parse(localStorage.getItem("user"))
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      function() {
        this.validateField(name, value);
        console.log("name=>", name);
        console.log("value=>", value);
      }
    );
  };
  validateField(name, value) {
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isTitle = name === "title";
    const isContent = name === "content";

    validity[name] = value.length > 0;

    fieldValidationErrors[name] = validity[name] ? "" : `내용을 입력해주세요.`;

    if (validity[name]) {
      if (isTitle) {
        validity[name] = 200 >= value.length;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `제목은 200자를 넘을 수 없습니다.`;
      }
      if (isContent) {
        validity[name] = 3000 >= value.length;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `내용은 3000자를 넘을 수 없습니다.`;
      }
      this.setState(
        {
          formErrors: fieldValidationErrors,
          formValidity: validity
        },
        () => this.canSubmit()
      );
    }
  }

  canSubmit() {
    this.setState({
      canSubmit:
        this.state.formValidity.title && this.state.formValidity.content
    });
    console.log("canSubmit=>", this.state.canSubmit);
  }

  errorClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }

  onSubmit() {
    var user = localStorage.getItem("user");
    var token = user.token;
    var id = user.ui_id;
    var config = {
      headers: {
        "X-Auth-Token": token,
        "X-Auth-Id": id
      }
    };
    return axios
      .post("https://rbd.javajs.net:8100/freeboard", config)({
        fre_title: this.state.title,
        fre_content: this.state.content
      })
      .then(res => {
        console.log(res.data);
      });
  }
  handleSubmit = event => {
    event.preventDefault();
  };
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
          <h6>작성자:{this.state.user.ui_nick}</h6>
        </CardBody>
        <CardBody className="mb-5">
          <form
            className="mx-3 grey-text"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <CardHeader className="mt-3">
              <Row>
                <Col className="mt-2" md="2">
                  <label htmlFor="title">글 제목</label>
                </Col>
                <Col className="mt-1" md="10">
                  <input
                    value={this.state.title}
                    name="title"
                    onChange={this.handleChange}
                    type="text"
                    id="title"
                    className={`form-control ${this.errorClass(
                      this.state.formErrors.title
                    )}`}
                    placeholder="제목을 입력해주세요."
                    requiredc
                  />
                  <div className="invalid-feedback">
                    {this.state.formErrors.title}
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <label htmlFor="content">내용</label>
              <textArea
                name="content"
                onChange={this.handleChange}
                className={`form-control form-control-sm ${this.errorClass(
                  this.state.formErrors.content
                )}`}
                style={{ minHeight: "500px" }}
                placeholder="글작성은 최대 3000자 까지 가능합니다."
                value={this.state.content}
              />
              <div className="invalid-feedback">
                {this.state.formErrors.content}
              </div>
            </CardBody>
            <div>
              <Button
                color="primary"
                type="submit"
                disabled={!this.state.canSubmit}
              >
                작성완료 
              </Button>
              <Button color="secondary" href="/board/free">
                취소
              </Button>
            </div>
          </form>
        </CardBody>
      </React.Fragment>
    );
  }
}

export default BoardWrite;
