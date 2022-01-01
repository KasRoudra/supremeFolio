import React from "react";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import { publications } from "../../portfolio.js";
import "./Publications.css";
import {Fade} from "react-reveal";

export default function Publications (props){
//	const pubs= publications.data;
    if (!publications.display) {
      return null;
    }
    const theme= props.theme;
    console.log(publications)
	return(
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
            return <PublicationCard repo={pubs} theme={theme} />;
          })}
        </div>
     </div>   
	)	
}	