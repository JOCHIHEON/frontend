import React from "react";
import { MDBFooter, Fa } from "mdbreact";
import { Col, Container, Row } from "mdbreact";
import Footerlogo from "../img/footer_logo.png";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="3">
            <img src={Footerlogo} />
          </Col>
          <Col md="6">
            <p>
              <Fa icon="dribbble" className="mr-3" />
              농구구기록실 rebound.com(리바운드)는 농구팬들을 위해운영되는
              사이트입니다.
            </p>

            <p>
              <Fa icon="dribbble" className="mr-3" />
              리바운드에서 제공하는 한국 프로농구 기록및 통계데이터는 오류가
              생기면 KBL과 차이가 있을 수 있습니다.
            </p>
            <p>
              <Fa icon="dribbble" className="mr-3" />
              이점 유의 하여 사용 하시길 바랍니다. 이에 따른 법적책임은
              리바운드에서 책임지지 않습니다.
            </p>
          </Col>
          <Col md="3">
            <h5 className="text-md-right">The makers</h5>
            <ul>
              <li className="list-unstyled text-md-right">
                <a href="https://github.com/JOCHIHEON">
                  <span>
                    Chiheon Jo
                    <Fa icon="github" className="mr-3" />
                  </span>
                </a>
              </li>
              <li className="list-unstyled text-md-right">
                <a href="https://github.com/JINAJUNG">
                  Jina Jung
                  <Fa icon="github" className="mr-3" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://rbd.javajs.net"> rbd.javajs.net </a>
        </Container>
      </div>
    </MDBFooter>
  );
};

export default Footer;
