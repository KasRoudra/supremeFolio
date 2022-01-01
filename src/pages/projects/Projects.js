import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Publications from "../../containers/publications/Publications";
import ProjectsSection from "../../components/projectsSection/ProjectsSection";
import {pageEnabled} from "../../portfolio";
import TopButton from "../../components/topButton/TopButton";


class Projects extends Component {
    render() {
    const theme = this.props.theme;
    if (!pageEnabled.projects){
    	return null;
    }	
    return (
      <div className="Pages">
        <Header theme={theme} />
        <ProjectsSection theme={theme}/>
        <Publications theme={theme}/>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
