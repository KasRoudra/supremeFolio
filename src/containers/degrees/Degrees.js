import React from "react";
import { Fade } from "react-reveal";
import { degrees } from "../../portfolio";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import "./Degrees.css";

const Degrees = (props) => {
  const theme = props.theme;
  const viewDegree = degrees.display;
  if (!viewDegree) {
    return null;
  }
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return (
            <DegreeCard degree={degree} key={degree.title} theme={theme} />
          );
        })}
      </div>
    </div>
  );
};

export default Degrees;
