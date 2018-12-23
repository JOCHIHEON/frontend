import React, { Component } from "react";
import { Input } from "mdbreact";
import { Button, Card, CardHeader, CardBody } from "mdbreact";
import { FormInline, MDBIcon } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import Axios from "axios";

class BoardWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      user: localStorage.getItem("user")
    };
  }
  onSubmit() {
    return Axios.post("https://rbd.javajs.net:8100/freeboard", {
      fre_title: this.state.title,
      fre_content: this.state.content
    }).then(res => {
      console.log(res.data);
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
          <FormInline className="md-form m-0" />
        </CardBody>
        <Card className="mb-5">
          <form className="mx-3 grey-text">
            <CardHeader>
              <FormInline className="md-form m-0">
                <Input
                  label="제목을 입력해주세요."
                  icon="pencil"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.title}
                />
              </FormInline>
            </CardHeader>
            <CardBody>
              <textarea
                id="write"
                className="form-control form-control-sm"
                style={{ minHeight: "500px" }}
                placeholder="글작성은 최대 3000자 까지 가능합니다."
                value={this.state.content}
              />
            </CardBody>
          </form>
          <div>
            <Button color="dark" type="submit">
              글 작성
            </Button>
            <Button color="dark" href="/board/free">
              취소
            </Button>
          </div>
        </Card>
      </React.Fragment>
    );
  }
}

export default BoardWrite;
