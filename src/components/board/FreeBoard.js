import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import axios from "axios";
import { ListGroup, ListGroupItem, Container } from "mdbreact";
import { Col, Row } from "mdbreact";
import { FormInline, Button } from "mdbreact";

var boards = [];

function getCaret(direction) {
  if (direction === "asc") {
    return <span>▲</span>;
  }
  if (direction === "desc") {
    return <span>▼</span>;
  }
  return <span>▲/▼</span>;
}

class FreeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.options = {
      defaultSortName: "fre_no", // default sort column name
      defaultSortOrder: "desc" // default sort order
    };
  }
  componentDidMount() {
    this.FreeBoard();
  }
  FreeBoard() {
    return axios.get("http://rbd.javajs.net:8100/freeboard", {}).then(res => {
      boards = res.data;
      this.setState({ value: this.state.value + 1 });
    });
  }

  renderPaginationPanel = props => {
    return (
      <div>
        {props.components.pageList}
        <span>게시물 수 : </span>
        {props.components.sizePerPageDropdown}
      </div>
    );
  };

  render() {
    const options = {
      paginationPanel: this.renderPaginationPanel
    };
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
            </FormInline>
            <BootstrapTable
              ref="table"
              data={boards}
              pagination={true}
              search={true}
              options={options}
              hover
            >
              <TableHeaderColumn
                dataField="fre_no"
                thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                isKey={true}
              >
                번호
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="fre_title"
                thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
              >
                제목
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="ui_no"
                thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
              >
                닉네임
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="fre_moddat"
                thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
              >
                작성일
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="fre_lookupcnt"
                thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                caretRender={getCaret}
                dataSort
              >
                조회수
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="fre_like"
                thStyle={{ backgroundColor: "#42a5f5", color: "white" }}
                caretRender={getCaret}
                dataSort
              >
                추천
              </TableHeaderColumn>
            </BootstrapTable>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FreeBoard;
