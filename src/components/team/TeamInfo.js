import React from "react";
import { Card } from "mdbreact";
import { Breadcrumb, BreadcrumbItem } from "mdbreact";
import { FormInline } from "mdbreact";
import { Route } from "react-router-dom";
import TeamIntro from "./TeamIntro";
import TeamBanner from "./TeamBanner";
import TeamMenu from "./TeamMenu";
import TeamScheReco from "./TeamScheReco";
import TeamMember from "./TeamMember";
import TeamPlayerReco from "./TeamPlayerReco";

class TeamInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          tCode: "16",
          link: "/team/16",
          teamImg: "http://kbl.or.kr/images/teams/logo_16.gif",
          teamName: "DB"
        },
        {
          tCode: "35",
          link: "/team/35",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_35.gif",
          teamName: "삼성"
        },
        {
          tCode: "55",
          link: "/team/55",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_55.gif",
          teamName: "SK"
        },
        {
          tCode: "50",
          link: "/team/50",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_50.gif",
          teamName: "LG"
        },
        {
          tCode: "30",
          link: "/team/30",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_30.gif",
          teamName: "오리온스"
        },
        {
          tCode: "65",
          link: "/team/65",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_65.gif",
          teamName: "전자랜드"
        },
        {
          tCode: "60",
          link: "/team/60",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_60.gif",
          teamName: "KCC"
        },
        {
          tCode: "70",
          link: "/team/70",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_70.gif",
          teamName: "KGC"
        },
        {
          tCode: "06",
          link: "/team/06",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_06.gif",
          teamName: "KT"
        },
        {
          tCode: "10",
          link: "/team/10",
          teamImg: "http://www.kbl.or.kr/images/teams/logo_10.gif",
          teamName: "모비스"
        }
      ]
    };
  }
  render() {
    const routes = this.state.teams.map((route, inex) => (
      <div key={inex}>
        <Route
          path={route.link}
          render={props => <TeamMenu {...props} tCode={route.tCode} />}
        />
        <Route
          path={route.link + "/intro"}
          render={props => (
            <TeamIntro {...props} tCode={route.tCode} teamImg={route.teamImg} />
          )}
        />
        <Route path={route.link + "/schedule"} component={TeamScheReco} />
        <Route
          path={route.link + "/member"}
          render={props => <TeamMember {...props} tCode={route.tCode} />}
        />
        <Route path={route.link + "/record"} component={TeamPlayerReco} />
      </div>
    ));
    return (
      <React.Fragment>
        <h3>
          <Breadcrumb>
            <BreadcrumbItem>구단정보</BreadcrumbItem>
            <BreadcrumbItem active>팀이름</BreadcrumbItem>
          </Breadcrumb>
        </h3>
        <Card md="10">
          <FormInline m="5">
            {this.state.teams.map((teamBanner, i) => {
              return (
                <TeamBanner
                  link={teamBanner.link + "/intro"}
                  teamImg={teamBanner.teamImg}
                  teamName={teamBanner.teamName}
                  key={i}
                />
              );
            })}
          </FormInline>
          {routes}
        </Card>
      </React.Fragment>
    );
  }
}

export default TeamInfo;
