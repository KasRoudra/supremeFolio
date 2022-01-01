import React, {Component} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import EducationSection from "../../containers/educationSection/EducationSection";
//import CompetitiveSites from "../../containers/competitiveSites/CompetitiveSites";
import Degrees from "../../containers/degrees/Degrees";
import Certifications from "../../containers/certifications/Certifications";
import { pageEnabled } from "../../portfolio";

class Education extends Component{
     render() {
     const theme = this.props.theme;
     if (!pageEnabled.education){
    	return null;
     }
    return (
      <div className="Pages">
        <Header theme={theme} />
        <EducationSection theme={theme} />
        {/*<CompetitiveSites theme={theme} />*/}
        <Degrees theme={theme} />
        <Certifications theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Education;
