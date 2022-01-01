import React, { Component } from "react";
import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";
import IssuesData from "../../shared/opensource/issues.json";
import {openSource} from "../../portfolio";
import "./Issues.css";

class Issues extends Component {
  render() {
    const theme = this.props.theme;
    
    if (IssuesData.data.length === 0){
    	return null;
    }
    
    if(!openSource.issues){
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
            return <IssueCard issue={issue} />;
          })}
        </div>
      </div>
    );
  }
}

export default Issues;
