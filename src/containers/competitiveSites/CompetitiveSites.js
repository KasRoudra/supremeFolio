import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { competitiveSites } from "../../portfolio";
import "./CompetitiveSites.css";

const CompetitiveSites = (props) => {
  const theme = props.theme;
  if (!competitiveSites.display) {
    return null;
  }
  return (
    <div className="competitive-sites-main-div">
      <h3 className="heading-sub-text" style={{ color: theme.secondaryText }}>
        Basic Qualification and Certifcations
      </h3>
      <ul className="dev-icons">
        {competitiveSites.competitiveSites.map((logo) => {
          return (
            <OverlayTrigger
              key={logo.siteName}
              placement={"top"}
              style={{ marginBottom: "5px" }}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>{logo.siteName}</strong>
                </Tooltip>
              }
            >
              <li className="competitive-sites-inline" name={logo.siteName}>
                <a
                  href={logo.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </a>
              </li>
            </OverlayTrigger>
          );
        })}
      </ul>
    </div>
  );
};

export default CompetitiveSites;
