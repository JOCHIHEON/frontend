import React from "react";
import { Container, Row, Col } from "mdbreact";
import { Fa, MDBBtn } from "mdbreact";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "mdbreact";

import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      requestID: "",
      requestPW: "",
      user: localStorage.getItem("user"),
      title: "로그인"
    };
  }
  componentWillMount() {
    if (this.state.user) {
      this.state.title = "로그아웃";
    }
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    if (this.state.title == "로그아웃") {
      localStorage.clear();
      alert("로그아웃 되셨습니다.");
      window.location.reload();
    }
  };

  onSubmit() {
    let ui_id = this.state.requestID;
    let ui_pwd = this.state.requestPW;
    /* 글쓰기
      var user = localStorage.getItem("user")
      var token = user.token;
      var id = user.ui_id
      var config = {
        headers: { 
          "X-Auth-Token": token,
          "X-Auth-Id": id
         },
      };

      axios.post('http://YOUR_URL', this.data, config)
        .then((response) => {
        console.log(response.data);
      });
      
    localStorage.clear();
    */
    return axios
      .post("https://rbd.javajs.net:8100/login", {
        ui_id: ui_id,
        ui_pwd: ui_pwd
      })
      .then(res => {
        console.log(res.data);
        if (res.data.token) {
          localStorage.setItem("user", res.data);
          this.toggle();
          this.state.title = "로그아웃";
          if (localStorage != null) {
            window.location.reload();
            alert("로그인 되셨습니다.")
          }
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
          {this.state.title}
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
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <ModalBody>
              <div>
                <Fa className="fa-user" />
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
                <div className="invalid-feedback">아이디를 입력해주세요.</div>
              </div>

              <div>
                <Fa className="fa-lock" />
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
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="primary" type="submit">
                로그인
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                닫기
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Login;
