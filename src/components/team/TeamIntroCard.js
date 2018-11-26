import React from "react";
import { Button, CardImage, CardTitle, CardText } from "mdbreact";
import { Row, Col } from "mdbreact";

class TeamIntroCard extends React.Component {
  static propTypes = {
    teamImg: this.propTypes.string.isRequired,
    teamName: this.propTypes.string.isRequired,
    teamOwner: this.propTypes.string.isRequired,
    teamOwnerTmp: this.propTypes.string.isRequired,
    teamLeader: this.propTypes.string.isRequired,
    teamDirector: this.propTypes.string.isRequired,
    teamCoach: this.propTypes.string.isRequired,
    teamAdress: this.propTypes.string.isRequired,
    teamFoundation: this.propTypes.string.isRequired,
    teamContact: this.propTypes.string.isRequired
  };
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <CardImage className="img-fluid" src={this.props.teamImg} waves />
            </Col>
            <Col>
              <CardTitle>{this.props.teamName}</CardTitle>
              <CardText>
                구단주 : {this.props.teamOwner}
                <br />
                구단주 대행 : {this.props.teamOwnerTmp}
                <br />
                단장 : {this.props.teamLeader}
                <br />
                감독 : {this.props.teamDirector}
                <br />
                코치 : {this.props.teamCoach}
                <br />
                주소 : {this.props.teamAdress}
                <br />
                연고지/모기업 : {this.props.teamFoundation}
                <br />
                전화/팩스 : {this.props.teamContact}
                <br />
              </CardText>
              <Button href="#">구단 홈페이지로 가기</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default TeamIntroCard;
