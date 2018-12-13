import React from "react";
import { Container, Row, Col } from "mdbreact";
import { input, MDBBtn } from "mdbreact";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "mdbreact";

import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      requestID: "",
      requestPW: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit() {
    let userInfo = {
      ui_id: this.state.requestID,
      ui_pwd: this.state.requestPW
    };
    return axios
      .post(
        "http://rbd.javajs.net:8100/login" +
          { ui_id: this.state.requestID } +
          { ui_pwd: this.state.requestPW }
      )
      .then(res => {
        if (res == 1) {
          this.props.onSuccess(this.state.requestID);
        } else {
          this.setState({
            requestID: "",
            requestPW: ""
          });
        }
      });
  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    console.log(this.state.requestID);
    console.log(this.state.requestPW);

    this.onSubmit();
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <MDBBtn outline color="primary" onClick={this.toggle}>
          로그인
        </MDBBtn>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          size="lg"
          side
          position="top-right"
        >
          <ModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggle}
          >
            로그인
          </ModalHeader>
          <ModalBody>
            <Col md="">
              <form
                className="needs-validation"
                onSubmit={this.submitHandler}
                noValidate
              >
                <Row>
                  <div className="col-md-4 mb-3">
                    <label
                      htmlFor="defaultFormRegisterNameEx"
                      className="grey-text"
                    >
                      아이디
                    </label>
                    <input
                      value={this.state.requestID}
                      name="requestID"
                      onChange={this.changeHandler}
                      type="text"
                      id="defaultFormRegisterNameEx"
                      className="form-control"
                      placeholder="ID"
                      required
                    />
                    <div className="invalid-feedback">
                      아이디를 입력해주세요.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label
                      htmlFor="defaultFormRegisterEmailEx2"
                      className="grey-text"
                    >
                      비밀번호
                    </label>
                    <input
                      value={this.state.requestPW}
                      name="requestPW"
                      onChange={this.changeHandler}
                      type="password"
                      id="defaultFormRegisterEmailEx2"
                      className="form-control"
                      placeholder="PassWord"
                      required
                    />
                    <div className="invalid-feedback">
                      비밀번호를 입력해주세요.
                    </div>
                  </div>
                </Row>
                <button className="btn btn-unique" type="submit">
                  로그인
                </button>
                <button
                  className="btn btn-unique"
                  type="submit"
                  onClick={this.toggle}
                >
                  닫기
                </button>
              </form>
            </Col>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
