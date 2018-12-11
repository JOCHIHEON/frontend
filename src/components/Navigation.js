import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem
} from "mdbreact";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import Navlogo from "../img/navlogo.png";
import Login from "./modals/loginModal";
import Join from "./modals/joinModal";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="flexible-navbar" light expand="md" scrolling>
          <NavbarBrand href="/">
            <img src={Navlogo} />
          </NavbarBrand>
        </Navbar>
        <Navbar
          className="flexible-navbar"
          light
          expand="md"
          scrolling
          color="black"
        >
          <NavbarToggler
            image="https://mdbootstrap.com/img/svg/hamburger6.svg?color=000"
            onClick={this.onClick}
          />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <Dropdown>
                  <DropdownToggle outline color="white">
                    일정/결과
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/schedule">경기일정</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle outline color="white">
                    경기기록
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/record/rank">팀순위</DropdownItem>
                    <DropdownItem href="/record/versus">상대전적</DropdownItem>
                    <DropdownItem href="/record/detail">
                      부문별 팀순위
                    </DropdownItem>
                    <DropdownItem href="/record">공수력 비교</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle outline color="white">
                    구단정보
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/team/16/intro">원주DB</DropdownItem>
                    <DropdownItem href="/team/35/intro">서울삼성</DropdownItem>
                    <DropdownItem href="/team/55/intro">서울SK</DropdownItem>
                    <DropdownItem href="/team/50/intro">창원LG</DropdownItem>
                    <DropdownItem href="/team/30/intro">
                      고양오리온스
                    </DropdownItem>
                    <DropdownItem href="/team/65/intro">
                      인천전자랜드
                    </DropdownItem>
                    <DropdownItem href="/team/60/intro">전주KCC</DropdownItem>
                    <DropdownItem href="/team/70/intro">안양KGC</DropdownItem>
                    <DropdownItem href="/team/06/intro">부산KT</DropdownItem>
                    <DropdownItem href="/team/10/intro">
                      울산현대모비스
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle outline color="white">
                    선수정보
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/players/detail">선수상세</DropdownItem>
                    <DropdownItem href="/players/rank">선수순위</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle outline color="white">
                    경기 중계
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/live/n">네이버 중계</DropdownItem>
                    <DropdownItem href="/live/a">아프리카 중계</DropdownItem>
                    <DropdownItem href="/live/k">KBL 중계</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle outline color="white">
                    커뮤니티
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/board/free">자유게시판</DropdownItem>
                    <DropdownItem href="/board/fan/1">팬게시판</DropdownItem>
                    <DropdownItem href="/board/qna">Q&A</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle outline color="white">
                    뉴스
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/news/naver">네이버 뉴스</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <Login />
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <Join />
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
