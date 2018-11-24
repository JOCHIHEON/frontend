import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import { Col, Row , Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem, Button, Fa } from 'mdbreact';
import { ListGroup, ListGroupItem, Container, FormInline } from 'mdbreact';

const QnABoard = () => {
    
        return(
            <React.Fragment>
                <Card className="mb-5">
                    <CardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <Breadcrumb>
                            <BreadcrumbItem><a>커뮤니티</a></BreadcrumbItem>
                            <BreadcrumbItem active>Q&A</BreadcrumbItem>
                        </Breadcrumb>
                        <FormInline className="md-form m-0">
                            <input className="form-control form-control-sm" type="search" placeholder="검색하기" aria-label="Search"/>
                            <Button size="sm" color="primary" className="my-0" type="submit" href="#"><Fa icon="search" /></Button>
                        </FormInline>
                    </CardBody>
                <Container>
                    <Row>
                    <Col md="2">
                        <ListGroup>
                            <ListGroupItem href="/board/free">자유게시판</ListGroupItem>
                            <ListGroupItem href="/board/fan/1">팬게시판</ListGroupItem>
                            <ListGroupItem href="/board/qna" active>Q&A</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md="10">
                    <Card className="mb-5">
                    <Breadcrumb>
                        <Button color="grey" className="boardbtn_all" type="submit" href="/board/qna">전체</Button>           
                        <Button color="primary" className="board-write" type="submit" href="#">문의하기</Button>
                    </Breadcrumb>
                            <Table>
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
                            <TableBody>
                                <tr>
                                <td>1</td>
                                <td><a>test</a></td>
                                <td>Mark</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td><a>test</a></td>
                                <td>Jacob</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td><a>test</a></td>
                                <td>Larry</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                            </TableBody>
                            </Table>
                        </Card>
                        </Col>
                    </Row>
                    </Container>
                </Card>
            </React.Fragment>
        );
    
};
export default QnABoard;