import React from "react";
import { Col, Row } from "mdbreact";

const MainPlayerRank = () => {
  return (
    <div class="p_rank">
      <h3 class="title_c">PLAYER RANKING</h3>
      <Row>
        <Col class="desc_block">
          <strong>득점</strong>
          <div class="name">오세근</div>
          <div class="team">[안양KGC]</div>
          <em>17.0</em>
        </Col>
        <Col class="frame_g">
          <div class="cover">
            <img
              src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="110"
              height="110"
            />
          </div>
        </Col>

        <Col class="desc_block">
          <strong>리바운드</strong>
          <div class="name">오세근</div>
          <div class="team">[안양KGC]</div>
          <em>9.1</em>
        </Col>
        <Col class="frame_g">
          <div class="cover">
            <img
              src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="110"
              height="110"
            />
          </div>
        </Col>

        <Col class="desc_block">
          <strong>어시스트</strong>
          <div class="name">박찬희</div>
          <div class="team">[인천전자랜드]</div>
          <em>6.0</em>
        </Col>
        <Col class="frame_g">
          <div class="cover">
            <img
              src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="박찬희"
              class="rounded-circle img-fluid"
              width="110"
              height="110"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainPlayerRank;
