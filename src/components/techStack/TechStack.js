import React from "react";
import { Fade } from "react-reveal";
import { techStack } from "../../portfolio";
import "./TechStack.css";

const TechStack = (props) => {
  const theme = props.theme;
  if (techStack.display) {
    return (
      <div className="techMain">
        <Fade bottom duration={1000} distance="20px">
          <div className="skills-container">
            <div className="skills-bar">
              <h1 className="techstack-heading" style={{ color: theme.text }}>
                {techStack.title}
              </h1>
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage,
                };
                return (
                  <div key={i} className="skill">
                    <Fade right duration={1500}>
                      <p style={{ color: theme.secondaryText }}>{exp.Stack}</p>
                    </Fade>
                    <Fade left duration={1500}>
                      <div className="meter">
                        <span style={progressStyle}></span>
                      </div>
                    </Fade>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
};
export default TechStack;
