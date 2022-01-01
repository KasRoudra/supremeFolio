import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import {pageEnabled} from "../../portfolio";

class Opensource extends Component {
	render() {
    const theme = this.props.theme;
    if (!pageEnabled.opensource){
    	return null;
    }	
    return (
      <div className="Pages">  
        <Header theme={theme} />
        <Organizations theme={theme} />
        <OpensourceCharts theme={theme} />
        <PullRequests theme={theme} />
        <Issues theme={theme} />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Opensource;
