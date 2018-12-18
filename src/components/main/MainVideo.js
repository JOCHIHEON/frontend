import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  Iframe
} from "mdbreact";

const MainVideo = () => {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12" lg="6">
            <div className="mb-4">
              <div className="z-depth-1-half mb-4">
                <Iframe
                  className="img-fluid"
                  src="https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=95D34E133DE47E7FFF5AA1F9C4B3F1CB3996&outKey=V122a288ee90aa2656a5189ad8acc5dcb98b16984ee9af152123889ad8acc5dcb98b1&controlBarMovable=true&jsCallable=true&isAutoPlay=true&skinName=tvcast_white"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </div>
              <div className="d-flex justify-content-between">
                <a href="#!" className="deep-orange-text">
                  <h6 className="font-weight-bold">KT 1,748일만에 4연승!</h6>
                </a>
                <p className="font-weight-bold dark-grey-text">
                  <MDBIcon icon="clock-o" className="pr-2" />
                  27/02/2018
                </p>
              </div>
            </div>
          </MDBCol>

          <MDBCol md="12" lg="6">
            <div
              style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}
            >
              <MDBRow>
                <MDBCol md="3">
                  <div className="z-depth-1-half mb-4">
                    <Iframe className="img-fluid" src="" />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </div>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">26/02/2018</p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>

            <div
              style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}
            >
              <MDBRow>
                <MDBCol md="3">
                  <div className="z-depth-1-half mb-4">
                    <Iframe className="img-fluid" src="" />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </div>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">25/02/2018</p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Itaque earum rerum hic tenetur a sapiente delectus
                      </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>

            <div
              style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}
            >
              <MDBRow>
                <MDBCol md="3">
                  <div className="z-depth-1-half mb-4">
                    <Iframe className="img-fluid" src="" />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </div>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">24/03/2018</p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Soluta nobis est eligendi optio cumque nihil impedit quo
                        minus
                      </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>

            <div className="mb-4">
              <MDBRow>
                <MDBCol md="3">
                  <div className="z-depth-1-half mb-4">
                    <Iframe className="img-fluid" src="" />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </div>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">23/02/2018</p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Duis aute irure dolor in reprehenderit in voluptate
                      </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default MainVideo;
