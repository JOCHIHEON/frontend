import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { Input } from 'mdbreact';

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggle} color="mdb-color darken-3">회원가입</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} position="top">
          <ModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle}>회원가입</ModalHeader>
          <ModalBody>
            <form className="mx-3 grey-text">
                <Input label="아이디" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="비밀번호" icon="lock" group type="password" validate/>
                <Input label="비밀번호 확인" icon="lock" group type="password" validate/>
                <Input label="이름" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="닉네임" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="이메일" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="서포트팀" icon="tag" validate error="wrong" success="right"/>
            </form>
          </ModalBody>
          <ModalFooter className="justify-content-center">
          <Button color="primary">회원가입</Button>
            <Button color="secondary" onClick={this.toggle}>취소</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default Join;