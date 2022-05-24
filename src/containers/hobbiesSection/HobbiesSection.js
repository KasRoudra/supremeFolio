import React from "react";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
import "./HobbiesSection.css";

const HobbiesSection = (props) => {
  const theme = props.theme;
  return (
    <div className="basic-hobbies">
      <Fade bottom duration={2000} distance="40px">
        <div className="hobbies-heading-div">
          <div className="hobbies-heading-text-div">
            <h1 className="hobbies-heading-text" style={{ color: theme.text }}>
              {hobbies.title}
            </h1>
            <h2
              className="hobbies-subTitle"
              style={{ color: theme.secondaryText }}
            >
              {hobbies.subTitle}
            </h2>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HobbiesSection;
