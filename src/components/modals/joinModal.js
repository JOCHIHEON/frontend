import React from "react";
import {
  MDBBtn,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  MDBIcon,
  Row,
  Col
} from "mdbreact";
import axios from "axios";

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      requestID: "",
      requestPW: "",
      requestName: "",
      requestNick: "",
      requestTell: "",
      requestEmail: "",
      requestSupport: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onSubmit() {
    let ui_id = this.state.requestID;
    let ui_pwd = this.state.requestPW;
    let ui_name = this.state.requestName;
    let ui_nick = this.state.requestNick;
    let ui_support = this.state.requestSupport;
    let ui_tell = this.state.requestTell;
    let ui_email = this.state.requestEmail;
    return axios
      .post("https://rbd.javajs.net:8100/sign", {
        ui_id: ui_id,
        ui_pwd: ui_pwd,
        ui_name: ui_name,
        ui_nick: ui_nick,
        ui_support: ui_support,
        ui_tell: ui_tell,
        ui_email: ui_email
      })
      .then(res => {
        console.log(res.data);
        window.location.reload();
        alert("회원가입 되셨습니다.");
      });
  }
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    this.onSubmit();
  };
  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <MDBBtn outline color="info" onClick={this.toggle}>
          회원가입
        </MDBBtn>
        <Modal isOpen={this.state.modal} toggle={this.toggle} position="top">
          <ModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggle}
          >
            회원가입
          </ModalHeader>
          <form
            className="mx-3 grey-text needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <ModalBody>
              <Row>
                <div className="col-md-8">
                  <MDBIcon icon="user" />
                  <label
                    htmlFor="defaultFormRegisterConfirmEx3"
                    className="grey-text"
                  >
                    아이디
                  </label>
                  <input
                    value={this.state.requestID}
                    name="requestID"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterConfirmEx3"
                    className="form-control"
                    placeholder="ID"
                    required
                  />
                  <div className="invalid-feedback">아이디를 입력해주세요.</div>
                </div>
                <Col>
                  <Button size="sm" className="mt-4">
                    아이디
                    <br />
                    중복확인
                  </Button>
                </Col>
              </Row>
              <div className="col-md-12">
                <MDBIcon icon="lock" />
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  비밀번호
                </label>
                <input
                  value={this.state.requestPW}
                  name="requestPW"
                  onChange={this.changeHandler}
                  type="password"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control"
                  placeholder="PassWord"
                  required
                />
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="user-circle" />
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  이름
                </label>
                <input
                  value={this.state.requestName}
                  name="requestName"
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="이름"
                  required
                />
                <div className="invalid-feedback">이름을 입력해주세요.</div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="user-circle-o" />
                <label
                  htmlFor="defaultFormRegisterNameEx1"
                  className="grey-text"
                >
                  닉네임
                </label>
                <input
                  value={this.state.requestNick}
                  name="requestNick"
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterNameEx1"
                  className="form-control"
                  placeholder="닉네임"
                  required
                />
                <div className="invalid-feedback">닉네임을 입력해주세요.</div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="phone" />
                <label
                  htmlFor="defaultFormRegisterTellEx"
                  className="grey-text"
                >
                  전화번호
                </label>
                <input
                  value={this.state.requestTell}
                  name="requestTell"
                  onChange={this.changeHandler}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  id="defaultFormRegisterTellEx"
                  className="form-control"
                  placeholder="010-1234-0000"
                  required
                />
                <div className="invalid-feedback">전화번호를 입력해주세요.</div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="envelope" />
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  이메일
                </label>
                <input
                  value={this.state.requestEmail}
                  name="requestEmail"
                  onChange={this.changeHandler}
                  type="email"
                  id="defaultFormRegisterEmailEx2"
                  className="form-control"
                  placeholder="example@gmail.com"
                  required
                />
                <div className="invalid-feedback">
                  이메일이 올바르지 않습니다.
                </div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="tag" />
                <label
                  htmlFor="defaultFormRegisterSupportTeam"
                  className="grey-text"
                >
                  서포트팀
                </label>
                <select
                  className="custom-select browser-default"
                  id="defaultFormRegisterSupportTeam"
                  required
                >
                  <option value="">팀 선택</option>
                  <option value="16">원주 DB 프로미</option>
                  <option value="35">서울 삼성 썬더스</option>
                  <option value="55">서울 SK 나이츠</option>
                  <option value="50">창원 LG 세이커스</option>
                  <option value="30">고양 오리온 오리온스</option>
                  <option value="65">인천 전자랜드 엘리펀츠</option>
                  <option value="60">전주 KCC 이지스</option>
                  <option value="70">안양 KGC 인삼공사</option>
                  <option value="06">부산 KT 소닉붐</option>
                  <option value="10">울산 현대모비스 피버스</option>
                </select>
                <div className="invalid-feedback">팀을 선택해주세요.</div>
              </div>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="primary" type="submit">
                회원가입
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                취소
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Join;
