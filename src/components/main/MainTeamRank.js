import React from "react";
import { Card, Row, Col } from "mdbreact";

const MainTeamRank = () => {
  return (
    <Card class="visual__rank">
      <div class="tit__area">
        <h3 class="title_c">TEAM RANKING</h3>
        <div class="more_area">
          <a href="/stats/team_rank.asp">더보기</a>
        </div>
      </div>
      <Row class="row">
        <Col class="col list_rank">
          <li>
            <div class="info_team">
              <span class="txt_num">1</span>
              <strong class="txt_team">현대모비스</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">15</span>
              <span class="txt_lose">3</span>
            </div>
          </li>

          <li>
            <div class="info_team">
              <span class="txt_num">2</span>
              <strong class="txt_team">KT</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">12</span>
              <span class="txt_lose">6</span>
            </div>
          </li>

          <li>
            <div class="info_team">
              <span class="txt_num">3</span>
              <strong class="txt_team">전자랜드</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">11</span>
              <span class="txt_lose">7</span>
            </div>
          </li>

          <li>
            <div class="info_team">
              <span class="txt_num">4</span>
              <strong class="txt_team">LG</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">10</span>
              <span class="txt_lose">8</span>
            </div>
          </li>

          <li>
            <div class="info_team">
              <span class="txt_num">5</span>
              <strong class="txt_team">KGC</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">9</span>
              <span class="txt_lose">9</span>
            </div>
          </li>
        </Col>
        <Col class="col list_rank">
          <li>
            <div class="info_team">
              <span class="txt_num">6</span>
              <strong class="txt_team">SK</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">8</span>
              <span class="txt_lose">10</span>
            </div>
          </li>

          <li>
            <div class="info_team">
              <span class="txt_num">6</span>
              <strong class="txt_team">KCC</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">8</span>
              <span class="txt_lose">10</span>
            </div>
          </li>

          <li>
            <div class="info_team">
              <span class="txt_num">8</span>
              <strong class="txt_team">DB</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">7</span>
              <span class="txt_lose">11</span>
            </div>
          </li>

          <li>
            <div class="info_team">
              <span class="txt_num">9</span>
              <strong class="txt_team">오리온</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">6</span>
              <span class="txt_lose">12</span>
            </div>
          </li>

          <li>
            <div class="info_team">
              <span class="txt_num">10</span>
              <strong class="txt_team">삼성</strong>
            </div>
            <div class="info_score">
              <span class="txt_win">4</span>
              <span class="txt_lose">14</span>
            </div>
          </li>
        </Col>
      </Row>
    </Card>
  );
};

export default MainTeamRank;
