import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
import { Row, Col } from "mdbreact";

class TeamInfoCard extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardImage className="img-fluid" src={this.props.teamImg} waves />
            <CardBody>
              <CardTitle>{this.props.teamName}</CardTitle>
              <CardText>
                구단주 : 김정남
                <br />
                구단주 대행 : -<br />
                단장 : 신해용
                <br />
                감독 : 이상범
                <br />
                코치 : 이효상,김성철
                <br />
                주소 : 서울시 강남구 테헤란로 432 DB금융센터 15층
                <br />
                연고지/모기업 : 원주 / DB손해보험
                <br />
                전화/팩스 : 02)3011-3176 / 0505)181-0092
                <br />
              </CardText>
              <Button href="#">구단 홈페이지로 가기</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default TeamInfoCard;
