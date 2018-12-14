import React, { Component } from "react";
import { Card, CardBody, Breadcrumb, BreadcrumbItem, CardText } from "mdbreact";
import { Row, Col, CardImage, CardTitle, Button } from "mdbreact";
class PlayerCard extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>선수상세</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Card md="10">
          <CardBody>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <CardImage
                          className="img-fluid mx-auto"
                          src={this.props.teamImg}
                          waves
                        />
                      </Col>
                      <Col>
                        <CardTitle>타이틀</CardTitle>
                        <CardText>
                          성명 : 성명
                          <br />
                          생년월일 : 생년월일
                          <br />
                          신장 : 신장
                          <br />
                          소속 : 소속
                          <br />
                          포지션/배번 : 포지션/배번
                          <br />
                          출신교 : 출신교
                          <br />
                        </CardText>
                        <Button href="/player/detail">
                          전체 선수 목록으로
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default PlayerCard;
