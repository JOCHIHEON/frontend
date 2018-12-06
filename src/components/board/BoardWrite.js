import React, { Component } from "react";
import { Input } from "mdbreact";
import { Button, Card, CardHeader, CardBody } from "mdbreact";
import { FormInline } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";

class BoardWrite extends Component {
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
          <CardHeader>
            <Input
              label="제목을 입력해주세요."
              icon="pencil" //icon css
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
          </CardHeader>
          <CardBody>
            <form className="mx-3 grey-text">
              <textarea
                id="write"
                className="form-control form-control-sm"
                style={{ minHeight: "500px" }}
                placeholder="글작성은 최대 3000자 까지 가능합니다."
              />
            </form>
          </CardBody>
          <div>
            <Button color="dark">글 작성</Button>
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
