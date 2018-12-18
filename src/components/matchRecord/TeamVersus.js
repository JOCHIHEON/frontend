import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  TableBody,
  TableHead,
  ListGroup,
  ListGroupItem,
  CardBody
} from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import Footerlogo from "../../img/footerlogo.jpg";
import VSlogo from "../../img/VS.png";
import "./TeamVersus.css";
class TeamVersus extends Component {
  constructor(props) {
    super();
    this.state = {
      tech: ""
    };
  }
  handleChange(e) {
    this.setState({
      tech: e.target.value
    });
  }
  render() {
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>경기기록</BreadcrumbItem>
            <BreadcrumbItem>상대전적</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Row>
          <Col md="3">
            <Card>
              <h4>
                <div className="sub_title">
                  <CardBody>경기기록</CardBody>
                </div>
              </h4>
              <ListGroup>
                <ListGroupItem href="/record/rank">팀 순위</ListGroupItem>
                <ListGroupItem href="/record/versus" active>
                  상대전적
                </ListGroupItem>
                <ListGroupItem href="#">부문별 팀순위</ListGroupItem>
                <ListGroupItem href="#">공수력 비교</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col md="9">
            <Card className="mb-5">
              <div classNmae="mt-1">
                <h4>시즌 상대전적</h4>
              </div>
              <Row>
                <Col>
                  <div id="cardleftbottom">
                    <Row>
                      <Col>
                        <div id="hometeam">
                          <div>
                            <img src={this.state.tech} />
                          </div>
                          <select
                            className="browser-default custom-select"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.tech}
                          >
                            <option value={Footerlogo}>서울 삼성</option>
                            <option value={Footerlogo}>서울 삼성</option>
                            <option value="1">전주 KCC</option>
                            <option value="1">울산 현대모비스</option>
                            <option value="1">고양 오리온스</option>
                            <option value="1">인천 전자랜드</option>
                            <option value="1">창원 LG</option>
                            <option value="1">서울 SK</option>
                            <option value="1">부산 KT</option>
                            <option value="1">안양 KGC</option>
                            <option value="1">원주 DB</option>
                          </select>
                        </div>
                      </Col>
                      <Col>
                        <div id="vsimg">
                          <img src={VSlogo} width="71px" height="58px" />
                        </div>
                      </Col>
                      <Col>
                        <div id="awayteam">
                          <img src={Footerlogo} width="71px" height="58px" />
                          <select className="browser-default custom-select">
                            <option>팀을 선택해 주세요</option>
                            <option value="1">서울 삼성</option>
                            <option value="1">전주 KCC</option>
                            <option value="1">울산 현대모비스</option>
                            <option value="1">고양 오리온스</option>
                            <option value="1">인천 전자랜드</option>
                            <option value="1">창원 LG</option>
                            <option value="1">서울 SK</option>
                            <option value="1">부산 KT</option>
                            <option value="1">안양 KGC</option>
                            <option value="1">원주 DB</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div id="seasonrecordtable">
                    <Table>
                      <tr>
                        <td>Mark</td>
                        <td>시즌순위</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>상대전적</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>Larry</td>
                        <td>시즌전적</td>
                        <td>@twitter</td>
                      </tr>
                    </Table>
                  </div>
                  <div />
                </Col>

                <Col>
                  <div id="datetable">
                    <Table>
                      <TableHead>
                        <tr>
                          <th>경기일자</th>
                          <th>홈/원정구분</th>
                          <th>득점</th>
                          <th>실점</th>
                          <th>승/패</th>
                        </tr>
                      </TableHead>
                      <TableBody>
                        <tr>
                          <td>2018.10.13</td>
                          <td>홈</td>
                          <td>90</td>
                          <td>80</td>
                          <td>승</td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TeamVersus;
