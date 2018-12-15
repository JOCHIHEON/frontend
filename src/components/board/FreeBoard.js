import React, { Component } from "react";
import { Table, TableBody, TableHead, Col, Row } from "mdbreact";
import axios from "axios";
import { ListGroup, ListGroupItem, Container } from "mdbreact";
import { FormInline, Button } from "mdbreact";
import Paging from "../Paging";

var paging = {};
class FreeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { board: [] };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(clickBlock) {
    this.Naver(clickBlock);
  }
  componentDidMount() {
    this.FreeBoard();
  }
  FreeBoard(clickBlock) {
    if (clickBlock == undefined) {
      clickBlock = 1;
    }
    return axios.get("http://rbd.javajs.net:8100/freeboard", {}).then(res => {
      const board = res.data;
      paging = res.data.paging;
      this.setState({ board });
    });
  }
  BoardBest(clickBlock) {
    if (clickBlock == undefined) {
      clickBlock = 1;
    }
    return axios
      .get("http://rbd.javajs.net:8100/freeboard/best", {})
      .then(res => {
        const bestBoard = res.data;
        paging = res.data.paging;
        this.setState({ bestBoard });
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
            <FormInline className="md-form m-0">
              <Button color="grey" className="boardbtn_all" href="/board/free">
                전체
              </Button>
              <Button
                onclick={this.BoardBest}
                color="red"
                className="boardbtn_best"
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
            </FormInline>
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
            {/* <Paging page={paging} handlePageChange={this.handlePageChange} /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FreeBoard;
