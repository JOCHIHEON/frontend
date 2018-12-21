import React from "react";
import { Col, Row, Card, CardHeader, CardBody } from "mdbreact";

const MainPlayerRank = () => {
  return (
    <Card className="mt-3">
      <CardHeader className="title_c">PLAYER RANKING</CardHeader>
      <CardBody>
        <Row>
          <Col className="desc_block">
            <strong>득점</strong>
            <div className="name">오세근</div>
            <div className="team">[안양KGC]</div>
            <em>17.0</em>
          </Col>
          <Col className="frame_g">
            <div className="cover">
              <img
                src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
                alt="오세근"
                className="rounded-circle img-fluid"
                width="110"
                height="110"
              />
            </div>
          </Col>

          <Col className="desc_block">
            <strong>리바운드</strong>
            <div className="name">오세근</div>
            <div className="team">[안양KGC]</div>
            <em>9.1</em>
          </Col>
          <Col className="frame_g">
            <div className="cover">
              <img
                src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
                alt="오세근"
                className="rounded-circle img-fluid"
                width="110"
                height="110"
              />
            </div>
          </Col>

          <Col className="desc_block">
            <strong>어시스트</strong>
            <div className="name">박찬희</div>
            <div className="team">[인천전자랜드]</div>
            <em>6.0</em>
          </Col>
          <Col className="frame_g">
            <div className="cover">
              <img
                src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
                alt="박찬희"
                className="rounded-circle img-fluid"
                width="110"
                height="110"
              />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default MainPlayerRank;
