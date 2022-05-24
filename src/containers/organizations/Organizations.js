import React from "react";
import { Fade } from "react-reveal";
import { openSource } from "../../portfolio";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";
import "./Organizations.css";

const Organizations = (props) => {
  const theme = props.theme;
  if (OrganizationsData.data.length === 0 || !openSource.organizations) {
    return null;
  }
  return (
    <div id="organizations">
      <div className="organizations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="organizations-header" style={{ color: theme.text }}>
            Contributed Organizations
          </h1>
        </Fade>
      </div>
      <OrganizationList logos={OrganizationsData["data"]} />
    </div>
  );
};

export default Organizations;
