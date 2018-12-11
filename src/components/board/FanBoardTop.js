import React, { Component } from "react";
import { Fa, FormInline } from "mdbreact";
import { CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem, Button } from "mdbreact";

class FanBoardTop extends Component {
  render() {
    return (
      <CardBody
        id="breadcrumb"
        className="d-flex align-items-center justify-content-between"
      >
        <Breadcrumb>
          <BreadcrumbItem active>커뮤니티</BreadcrumbItem>
          <BreadcrumbItem>팬게시판</BreadcrumbItem>
          <BreadcrumbItem>props</BreadcrumbItem>
        </Breadcrumb>
        <FormInline className="md-form m-0">
          <input
            className="form-control form-control-sm"
            type="search"
            placeholder="검색하기"
            aria-label="Search"
          />
          <Button
            size="sm"
            color="primary"
            className="my-0"
            type="submit"
            href="#"
          >
            <Fa icon="search" />
          </Button>
        </FormInline>
      </CardBody>
    );
  }
}

export default FanBoardTop;
