import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import TerminalImg from "./TerminalImg";
import DesignImg from "./DesignImg";
import AppDevelopImg from "./AppDevelopImg";
import CloudInfraImg from "./CloudInfraImg";
import DataScienceImg from "./DataScienceImg";

function GetSkillSvg(props) {
  if (props.imageName === "TerminalImg")
    return <TerminalImg theme={props.theme} />;
  else if (props.imageName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.imageName === "AppDevelopImg")
     return <AppDevelopImg theme={props.theme} />;    
  else if (props.imageName === "CloudInfraImg")
     return <CloudInfraImg theme={props.theme} />;       
  else if (props.imageName === "DataScienceImg")
     return <DataScienceImg theme={props.theme} />;       
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div" key={skill.title}>
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg imageName={skill.imageName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          key={skillSentence}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
