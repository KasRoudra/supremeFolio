import React from "react";
import { Fade } from "react-reveal";
import { openSource } from "../../portfolio";
import IssueCard from "../../components/issueCard/IssueCard";
import IssuesData from "../../shared/opensource/issues.json";
import "./Issues.css";

const Issues = (props) => {
  const theme = props.theme;

  if (IssuesData.data.length === 0 || !openSource.issues) {
    return null;
  }

  return (
    <div>
      <div className="issues-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="issues-header" style={{ color: theme.text }}>
            Issues
          </h1>
        </Fade>
      </div>
      <div className="issues-body-div">
        {IssuesData["data"].map((issue) => {
          return <IssueCard issue={issue} key={issue.id} />;
        })}
      </div>
    </div>
  );
};

export default Issues;
