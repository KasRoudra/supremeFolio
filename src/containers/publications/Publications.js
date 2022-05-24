import React from "react";
import { Fade } from "react-reveal";
import { publications } from "../../portfolio.js";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import "./Publications.css";

const Publications = (props) => {
  //	const pubs= publications.data;
  const theme = props.theme;
  if (!publications.display) {
    return null;
  }
  return (
    <div>
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="publications-heading-div">
            <div className="publications-heading-text-div">
              <h1
                className="publications-heading-text"
                style={{ color: theme.text }}
              >
                {publications.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {publications["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {publications.publications.data.map((pubs) => {
          return (
            <PublicationCard
              publication={pubs}
              theme={theme}
              key={pubs.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
