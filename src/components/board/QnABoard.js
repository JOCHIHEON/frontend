import React, { Component } from "react";
import axios from "axios";
import { Table, TableBody, TableHead } from "mdbreact";
import { Col, Row, Card } from "mdbreact";
import { Breadcrumb, Button } from "mdbreact";
import { ListGroup, ListGroupItem, Container } from "mdbreact";

class QnABoard extends Component {
  constructor(props) {
    super(props);
    this.state = { board: [] };
  }
  componentDidMount() {
    this.QnABoard();
  }
  QnABoard() {
    return axios.get("http://rbd.javajs.net:8100/qna", {}).then(res => {
      const board = res.data;
      this.setState({ board });
    });
  }
  render() {
    const boards = this.state.board.map((item, i) => (
      <tr>
        <td>{item.qna_no}</td>
        <td>
          <a>{item.qna_title}</a>
        </td>
        <td>{item.ui_no}</td>
        <td>{item.qna_moddat}</td>
        <td>{item.qna_lookupcnt}</td>
        <td>{item.qna_like}</td>
      </tr>
    ));
    return (
      <Container>
        <Row>
          <Col md="2">
            <ListGroup>
              <ListGroupItem href="/board/free">자유게시판</ListGroupItem>
              <ListGroupItem href="/board/fan/1">팬게시판</ListGroupItem>
              <ListGroupItem href="/board/qna" active>
                Q&A
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="10">
            <Card className="mb-5">
              <Breadcrumb>
                <Button
                  color="grey"
                  className="boardbtn_all"
                  type="submit"
                  href="/board/qna"
                >
                  전체
                </Button>
                <Button
                  color="primary"
                  className="board-write"
                  type="submit"
                  href="#"
                >
                  문의하기
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
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default QnABoard;
