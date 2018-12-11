import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "mdbreact";
import { Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import { FormInline } from "mdbreact";
import { ListGroup, ListGroupItem, Container } from "mdbreact";
import { Route, Switch } from "react-router-dom";
import TeamInfo1 from "./TeamInfo1";
import TeamIntro from "./TeamIntro";
import TeamBanner from "./TeamBanner";
import TeamMenu from "./TeamMenu";

class TeamInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamBanners: [
        {
          link: "/team/info/1",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/215.png",
          teamName: "DB"
        },
        {
          link: "/team/info/2",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/212.png",
          teamName: "삼성"
        },
        {
          link: "/team/info/3",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/211.png",
          teamName: "SK"
        },
        {
          link: "/team/info/4",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/218.png",
          teamName: "LG"
        },
        {
          link: "/team/info/5",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/209.png",
          teamName: "오리온스"
        },
        {
          link: "/team/info/6",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/216.png",
          teamName: "전자랜드"
        },
        {
          link: "/team/info/7",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/217.png",
          teamName: "KCC"
        },
        {
          link: "/team/info/8",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/213.png",
          teamName: "KGC"
        },
        {
          link: "/team/info/9",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/210.png",
          teamName: "KT"
        },
        {
          link: "/team/info/10",
          teamImg:
            "https://thumb.named.com/normal/resize/72x45/sports/basketball/team/214.png",
          teamName: "모비스"
        }
      ],
      menuLink: ""
    };
    this.handleTeamChange = this.handleTeamChange.bind(this);
  }
  handleTeamChange() {
    this.setState({ menuLink: "/team/info/1" });
  }
  render() {
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>구단정보</BreadcrumbItem>
            <BreadcrumbItem active>원주DB</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Card md="10">
          <FormInline m="5">
            {this.state.teamBanners.map((teamBanner, i) => {
              return (
                <TeamBanner
                  link={teamBanner.link}
                  teamImg={teamBanner.teamImg}
                  teamName={teamBanner.teamName}
                  key={i}
                />
              );
            })}
          </FormInline>
          <Switch>
            <Route
              path="/team/info/1"
              render={props => (
                <div>
                  <TeamMenu {...props} teamCode={16} />
                  <TeamIntro {...props} link={"/team/intro/1"} />
                </div>
              )}
            />
            <Route
              path="/team/intro/2"
              render={props => <TeamIntro {...props} teamCode={35} />}
            />
            <Route
              path="/team/intro/3"
              render={props => <TeamIntro {...props} teamCode={16} />}
            />
            <Route
              path="/team/intro/4"
              render={props => <TeamIntro {...props} teamCode={16} />}
            />
            <Route
              path="/team/intro/5"
              render={props => <TeamIntro {...props} teamCode={16} />}
            />
            <Route
              path="/team/intro/6"
              render={props => <TeamIntro {...props} teamCode={16} />}
            />
            <Route
              path="/team/intro/7"
              render={props => <TeamIntro {...props} teamCode={16} />}
            />
            <Route
              path="/team/intro/8"
              render={props => <TeamIntro {...props} teamCode={16} />}
            />
            <Route
              path="/team/intro/9"
              render={props => <TeamIntro {...props} teamCode={16} />}
            />
            <Route
              path="/team/intro/10"
              render={props => <TeamIntro {...props} teamCode={16} />}
            />
          </Switch>
          <CardBody />
        </Card>
      </React.Fragment>
    );
  }
}

export default TeamInfo;
