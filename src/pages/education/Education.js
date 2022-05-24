import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, TopButton, Footer } from "../../components";
import { EducationSection, Degrees, Certifications } from "../../containers";

const Education = (props) => {
  const theme = props.theme;
  if (!pageEnabled.education) {
    return null;
  }
  return (
    <div className="main-page">
      <Header theme={theme} />
      <EducationSection theme={theme} />
      <Degrees theme={theme} />
      <Certifications theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Education;
