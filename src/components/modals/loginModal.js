import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { Input } from 'mdbreact';


class Login extends React.Component {
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
        <Button onClick={this.toggle} color="primary">로그인</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm" side position="top-right">
          <ModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle}>로그인</ModalHeader>
          <ModalBody>
             <form className="mx-3 grey-text">
                <Input label="아이디" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="비밀번호" icon="lock" group type="password" validate/>
            </form>
          </ModalBody>
          <ModalFooter className="justify-content-center">
          <Button color="primary">로그인</Button>
            <Button color="secondary" onClick={this.toggle}>닫기</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default Login;