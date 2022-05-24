import React from "react";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
import "./HobbiesCard.css";

const HobbiesCard = (props) => {
  const theme = props.theme;
  return (
    <div className="hobbies-card">
      <Fade bottom duration={2000} distance="40px">
        <div className="hobbies-card-body-div">
          {hobbies.hobbies.map((hobbiesdata) => {
            return (
              <div className="hobbies-data" key={hobbiesdata.title}>
                <div className="hobbies-heading">
                  <Fade left duration={2000}>
                    <div
                      className="hobbies-card-title"
                      style={{ color: theme.text }}
                    >
                      {hobbiesdata.title}
                    </div>
                    <div
                      className="hobbies-card-subtitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {hobbiesdata.description}
                    </div>
                  </Fade>
                </div>
                <Fade right duration={2000}>
                  <div className="hobbies-card-img">
                    <img
                      className="hobbies-image"
                      src={require(`../../assets/images/${hobbiesdata["image_path"]}`)}
                      alt={hobbiesdata.title}
                    />
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default HobbiesCard;
