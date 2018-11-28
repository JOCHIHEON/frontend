import React from "react";
import { Card } from "mdbreact";
import TeamIntroCard from "./TeamIntroCard";

const teams = [
  {
    teamName: "원주 DB 프로미",
    teamImg: "http://kbl.or.kr/images/teams/logo_16.gif",
    teamOwner: "김정남",
    teamOwnerTmp: "-",
    teamLeader: "신해용",
    teamDirector: "이상범",
    teamCoach: "이효상, 김성철",
    teamAdress: "서울시 강남구 테헤란로 432 DB금융센터 15층",
    teamFoundation: "원주 / DB손해보험",
    teamContact: "02)3011-3176 / 0505)181-0092"
  },
  {
    teamName: "서울 삼성 썬더스",
    teamImg: "http://kbl.or.kr/images/teams/logo_35.gif",
    teamOwner: "김정남",
    teamOwnerTmp: "-",
    teamLeader: "신해용",
    teamDirector: "이상범",
    teamCoach: "이효상, 김성철",
    teamAdress: "서울시 강남구 테헤란로 432 DB금융센터 15층",
    teamFoundation: "원주 / DB손해보험",
    teamContact: "02)3011-3176 / 0505)181-0092"
  }
];

class TeamIntro extends React.Component {
  render() {
    return (
      <Card>
        {teams.map((team, index) => {
          return (
            <TeamIntroCard
              teamName={team.teamName}
              teamImg={team.teamImg}
              teamOwner={team.teamOwner}
              teamOwnerTmp={team.teamOwnerTmp}
              teamLeader={team.teamLeader}
              teamDirector={team.teamDirector}
              teamCoach={team.teamCoach}
              teamAdress={team.teamAdress}
              teamFoundation={team.teamFoundation}
              teamContact={team.teamContact}
              key={index}
            />
          );
        })}
      </Card>
    );
  }
}
export default TeamIntro;
{/*<Route
          path="/team"
          render={() => {
            return (
              <div>
                <TeamInfo />
                <Route
                  path="/team/teaminfo"
                  render={() => {
                    return (
                      <div>
                        <TeamIntro />
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        />*/}