import React from "react";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio.js";
import "./ExperienceSection.css";

const ExperienceSection = (props) => {
  const theme = props.theme;
  return (
    <div className="basic-experience">
      <Fade bottom duration={2000} distance="40px">
        <div className="experience-heading-div">
          <div className="experience-heading-img-div">
            {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
            <ExperienceImg theme={theme} />
          </div>
          <div className="experience-heading-text-div">
            <h1
              className="experience-heading-text"
              style={{ color: theme.text }}
            >
              {experience.title}
            </h1>
            <h3
              className="experience-heading-sub-text"
              style={{ color: theme.text }}
            >
              {experience["subtitle"]}
            </h3>
            <p
              className="experience-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {experience["description"]}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ExperienceSection;
