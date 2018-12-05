import React, { Component } from "react";
import { Fa, FormInline } from "mdbreact";
import { CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem, Button } from "mdbreact";

class FreeBoardTop extends Component {
  render() {
    return (
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
    );
  }
}

export default FreeBoardTop;
