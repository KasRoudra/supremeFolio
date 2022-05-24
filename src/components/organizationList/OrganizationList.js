import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./OrganizationList.css";

const OrganizationList = (props) => {
  const logos = props.logos;
  return (
    <div className="organizations-main-div">
      <ul className="dev-icons-orgs">
        {logos.map((logo) => {
          return (
            <OverlayTrigger
              key={logo["login"]}
              placement={"top"}
              style={{ marginBottom: "5px" }}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>{logo["login"]}</strong>
                </Tooltip>
              }
            >
              <li className="organizations-inline" name={logo["login"]}>
                <Fade bottom duration={2000} distance="40px">
                  <img
                    className="organizations-img"
                    src={logo["avatarUrl"]}
                    alt={logo["login"]}
                  />
                </Fade>
              </li>
            </OverlayTrigger>
          );
        })}
      </ul>
    </div>
  );
};

export default OrganizationList;
