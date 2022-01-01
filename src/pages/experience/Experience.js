import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceSection from "../../containers/experienceSection/ExperienceSection";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import { experience, pageEnabled } from "../../portfolio.js";

class Experience extends Component {
	render() {
    const theme= this.props.theme;
    if (!pageEnabled.experience){
    	return null;
    }	
    return (
      <div className="Pages">
        <Header theme={theme} />
        <ExperienceSection theme={theme} />
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;
