import React from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "mdbreact";
import { Input, MDBBtn } from "mdbreact";
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

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  ChangeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  onSubmit() {
    return axios
      .post("http://rbd.javajs.net:8100/login", {
        ui_id: "test1",
        ui_pwd: "test1"
      })
      .then(res => {
        if (res == 1) {
          console.log(res);
        } else {
          this.setState({
            requestID: "",
            requestPW: ""
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <MDBBtn outline color="primary" onClick={this.toggle}>
          로그인
        </MDBBtn>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          size="sm"
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
            <form
              className="mx-3 grey-text needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <Input
                value={this.state.requestID}
                name="requestID"
                onChange={this.ChangeHandler}
                label="아이디"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <Input
                value={this.state.requestPW}
                onChange={this.ChangeHandler}
                name="requestPW"
                label="비밀번호"
                icon="lock"
                group
                type="password"
                validate
              />
              <div className="valid-feedback">Looks good!</div>
            </form>
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <Button color="primary" type="submit">
              로그인
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              닫기
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
