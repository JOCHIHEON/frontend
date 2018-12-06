import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Table, TableBody, TableHead } from "mdbreact";
import { Card, Col, Row } from "mdbreact";
import { Breadcrumb, BreadcrumbItem, Button } from "mdbreact";
import { ListGroup, ListGroupItem, Container } from "mdbreact";
import Paging from "./Paging";
import axios from "axios";

class FreeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { board: [] };
  }
  componentDidMount() {
    this.FreeBoard();
  }
  FreeBoard() {
    return axios.get("http://rbd.javajs.net:8100/freeboard", {}).then(res => {
      const board = res.data;
      this.setState({ board });
    });
  }
  render() {
    const boards = this.state.board.map((item, i) => (
      <tr>
        <td>{item.fre_no}</td>
        <td>
          <a>{item.fre_title}</a>
        </td>
        <td>{item.ui_no}</td>
        <td>{item.fre_moddat}</td>
        <td>{item.fre_lookupcnt}</td>
        <td>{item.fre_like}</td>
      </tr>
    ));
    return (
      <Container>
        <Row>
          <Col md="2">
            <ListGroup>
              <ListGroupItem href="/board/free" active>
                자유게시판
              </ListGroupItem>
              <ListGroupItem href="/board/fan/1">팬게시판</ListGroupItem>
              <ListGroupItem href="/board/qna">Q&A</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="10">
            <Card className="mb-5">
              <Breadcrumb>
                <Button
                  color="grey"
                  className="boardbtn_all"
                  type="submit"
                  href="/board/free"
                >
                  전체
                </Button>
                <Button
                  color="red"
                  className="boardbtn_best"
                  type="submit"
                  href="#"
                >
                  베스트
                </Button>
                <Button
                  color="primary"
                  className="board-write"
                  type="submit"
                  href="/board/free/write"
                >
                  글쓰기
                </Button>
              </Breadcrumb>
              <Table className="table table-hover">
                <TableHead color="blue-grey lighten-4">
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>닉네임</th>
                    <th>작성일</th>
                    <th>조회수</th>
                    <th>추천</th>
                  </tr>
                </TableHead>
                <TableBody>{boards}</TableBody>
              </Table>
              <Paging />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default FreeBoard;
