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
// https://dev.to/nathansebhastian/react-form-real-time-validation-using-state-1eeg, 정규표현식
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
      requestSupport: "",
      formErrors: {
        requestID: "",
        requestPW: "",
        requestName: "",
        requestNick: "",
        requestTell: "",
        requestEmail: "",
        requestSupport: ""
      },
      formValidity: {
        requestID: false,
        requestPW: false,
        requestName: false,
        requestNick: false,
        requestTell: false,
        requestEmail: false,
        requestSupport: false
      },
      isSubmitDisabled: true
    };
    this.handleChange = this.handleChange.bind(this);
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
  handleSubmit = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    this.onSubmit();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      function() {
        this.validateField(name, value);
      },
      function() {
        this.canSubmit();
      }
    );
  };
  validateField(name, value) {
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const emailTest = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const tellTest = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/; //휴대전화만 가능
    const isID = name === "requestID";
    const isPW = name === "requestPW";
    const isName = name === "requestName";
    const isNick = name === "requestNick";
    const isTell = name === "requestTell";
    const isEmail = name === "requestEmail";
    const isSupport = name === "requestSupport";

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name]
      ? ""
      : `${name} is required and cannot be empty`;

    if (validity[name]) {
      if (isID || isNick) {
        validity[name] = 20 >= value.length >= 5;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 5 characters or more`;
      }
      if (isPW) {
        validity[name] = 20 >= value.length >= 8;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 8 characters or more`;
      }
      if (isName) {
        validity[name] = 20 >= value.length >= 2;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 2 characters or more`;
      }
      if (isTell) {
        validity[name] = tellTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name}가 잘못된 휴대폰 번호입니다. 숫자, - 를 포함한 숫자만 입력하세요.`;
      }
      if (isEmail) {
        validity[name] = emailTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid email address`;
      }
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        formValidity: validity
      },
      () => this.canSubmit()
    );
  }
  canSubmit() {
    if (
      this.state.formValidity.requestID &&
      this.state.formValidity.requestPW &&
      this.state.formValidity.requestName &&
      this.state.formValidity.requestNick &&
      this.state.formValidity.requestTell &&
      this.state.formValidity.requestEmail &&
      this.state.formValidity.requestSupport
    ) {
      this.setState({ isSubmitDisabled: false });
    } else {
      this.setState({ isSubmitDisabled: true });
    }
  }
  errorClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }

  // canSubmit() {
  //   const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  //   const {
  //     requestID,
  //     requestPW,
  //     requestName,
  //     requestNick,
  //     requestTell,
  //     requestEmail,
  //     requestSupport
  //   } = this.state;
  //   // TODO: add valid email format validation in this condition
  //   if (
  //     20 >= requestID.length >= 5 &&
  //     20 >= requestPW.length >= 8 &&
  //     20 >= requestName.length >= 2 &&
  //     20 >= requestNick.length >= 5 &&
  //     requestSupport.length > 0 &&
  //     requestTell.length > 0 &&
  //     requestEmail.length > 0 &&
  //     emailTest.test(requestEmail.toLowerCase())
  //   ) {
  //     this.setState({
  //       isSubmitDisabled: false
  //     });
  //   } else {
  //     this.setState({
  //       isSubmitDisabled: true
  //     });
  //   }
  // }
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
            onSubmit={this.handleSubmit}
            noValidate
          >
            <ModalBody>
              <Row>
                <div className="col-md-8">
                  <MDBIcon icon="user" />
                  <label htmlFor="requestID" className="grey-text">
                    아이디
                  </label>
                  <input
                    value={this.state.requestID}
                    name="requestID"
                    onChange={this.handleChange}
                    type="text"
                    id="requestID"
                    className="form-control ${this.errorClass(this.state.formErrors.requestID)}"
                    placeholder="ID"
                    required
                  />
                  <div className="invalid-feedback">
                    {this.state.formErrors.requestID}
                  </div>
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
                <label htmlFor="requestPW" className="grey-text">
                  비밀번호
                </label>
                <input
                  value={this.state.requestPW}
                  name="requestPW"
                  onChange={this.handleChange}
                  type="password"
                  id="requestPW"
                  className="form-control ${this.errorClass(this.state.formErrors.requestPW)}"
                  placeholder="PassWord"
                  required
                />
                <div className="invalid-feedback">
                  {this.state.formErrors.requestPW}
                </div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="user-circle" />
                <label htmlFor="requestName" className="grey-text">
                  이름
                </label>
                <input
                  value={this.state.requestName}
                  name="requestName"
                  onChange={this.handleChange}
                  type="text"
                  id="requestName"
                  className="form-control ${this.errorClass(this.state.formErrors.requestName)}"
                  placeholder="이름"
                  required
                />
                <div className="invalid-feedback">
                  {this.state.formErrors.requestName}
                </div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="user-circle-o" />
                <label htmlFor="requestNick" className="grey-text">
                  닉네임
                </label>
                <input
                  value={this.state.requestNick}
                  name="requestNick"
                  onChange={this.handleChange}
                  type="text"
                  id="requestNick"
                  className="form-control ${this.errorClass(this.state.formErrors.requestNick)}"
                  placeholder="닉네임"
                  required
                />
                <div className="invalid-feedback">
                  {this.state.formErrors.requestNick}
                </div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="phone" />
                <label htmlFor="requestTell" className="grey-text">
                  전화번호
                </label>
                <input
                  value={this.state.requestTell}
                  name="requestTell"
                  onChange={this.handleChange}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  id="requestTell"
                  className="form-control ${this.errorClass(this.state.formErrors.requestTell)}"
                  placeholder="010-1234-0000"
                  required
                />
                <div className="invalid-feedback">
                  {this.state.formErrors.requestTell}
                </div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="envelope" />
                <label htmlFor="requestEmail" className="grey-text">
                  이메일
                </label>
                <input
                  value={this.state.requestEmail}
                  name="requestEmail"
                  onChange={this.handleChange}
                  type="email"
                  id="requestEmail"
                  className="form-control ${this.errorClass(this.state.formErrors.requestEmail)}"
                  placeholder="example@gmail.com"
                  required
                />
                <div className="invalid-feedback">
                  {this.state.formErrors.requestEmail}
                </div>
              </div>
              <div className="col-md-12">
                <MDBIcon icon="tag" />
                <label htmlFor="requestSupport" className="grey-text">
                  서포트팀
                </label>
                <select
                  className="custom-select browser-default form-control ${this.errorClass(this.state.formErrors.requestSupport)}"
                  id="requestSupport"
                  onChange={this.handleChange}
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
                <div className="invalid-feedback">
                  {this.state.formErrors.requestSupport}
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button
                color="primary"
                type="submit"
                disabled={this.state.isSubmitDisabled}
              >
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
