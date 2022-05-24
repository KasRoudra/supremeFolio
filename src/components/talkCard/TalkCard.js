import React from "react";
import "./TalkCard.css";

const TalkCard = (props) => {
  const { theme, talkDetails } = props;
  return (
    <div>
      <div className="container">
        <div className="rectangle">
          <div className="diagonal-fill"></div>
          <div className="talk-card-title" style={{ color: theme.text }}>
            {talkDetails.title}
          </div>
          <p
            className="talk-card-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {talkDetails.subtitle}
          </p>
          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkCard;
