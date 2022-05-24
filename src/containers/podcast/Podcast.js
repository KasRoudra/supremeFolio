import React from "react";
import { Fade } from "react-reveal";
import { podcastSection } from "../../portfolio";
import "./Podcast.css";

const Podcast = (props) => {
  const theme = props.theme;
  if (!podcastSection.display) {
    return null;
  }
  return (
    <div className="podcast-main">
      <div className="podcast-header" align="center">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="podcast-header-title" style={{ color: theme.text }}>
            {podcastSection.title}
          </h1>
        </Fade>
        <Fade left duration={2000}>
          <p
            className="subTitle podcast-header-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {podcastSection.subtitle}
          </p>
        </Fade>
      </div>
      <div className="podcast-main-div">
        {podcastSection.podcast.map((podcastLink, i) => {
          if (!podcastLink) {
            console.log(`Podcast link for ${podcastSection.title} is missing`);
          }
          return (
            <div key={i} align="center">
              <Fade bottom duration={2000} distance="40px">
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                ></iframe>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Podcast;
