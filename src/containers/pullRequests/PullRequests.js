import React, { Component } from "react";
import { Fade } from "react-reveal";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import PullRequestsData from "../../shared/opensource/pull_requests.json";
import {openSource} from "../../portfolio";
import "./PullRequests.css";

class PullRequests extends Component {
  render() {
  	
    const theme = this.props.theme;
    
    if (!PullRequestsData.data.length === 0){
    	return null;
    }
    
    if(!openSource.pull_requests){
    	return null;
    }	
    
    return (
      <div>
        <div className="pull-requests-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="pull-requests-header" style={{ color: theme.text }}>
              Pull Requests
            </h1>
          </Fade>
        </div>
        <div className="pull-request-body-div">
          {PullRequestsData["data"].map((pullRequest) => {
            return <PullRequestCard pullRequest={pullRequest} />;
          })}
        </div>
      </div>
    );
  }
}

export default PullRequests;
