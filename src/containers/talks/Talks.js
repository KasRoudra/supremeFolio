import React from "react";
import {Fade} from "react-reveal";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import "./Talks.css";

export default function Talks(props) {
  if (!talkSection.display) {
    return null;
  }
  const theme=props.theme;
  return (
  <div className="talks-main">
      <div className="main" id="talks">
        <div className="talk-header">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="talk-header-title" style={{ color: theme.text}}>{talkSection.title}</h1>
          </Fade>
          <Fade right duration={2000}>
          <p
            className="subTitle talk-header-subtitle" style={{ color: theme.secondaryText}}
          >
            {talkSection.subtitle}
          </p>
          </Fade>
          {talkSection.talks.map((talk, i) => {
            return (
            <Fade bottom duration={2000} distance="40px">
              <TalkCard
                key={i}
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  slides_url: talk.slides_url,
                  event_url: talk.event_url,
                  image: talk.image,
                }}
              />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
