import React, {Component} from "react";
import EducationImg from "./EducationImg";
import CompetitiveSites from "../../containers/competitiveSites/CompetitiveSites";
import { Fade } from "react-reveal";
import "./EducationSection.css";

class EducationSection extends Component {
	render() {
    const theme = this.props.theme;
    return (
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <CompetitiveSites theme={theme} />
              </div>
            </div>
          </Fade>
      </div>
    );
  }
}

export default EducationSection;
