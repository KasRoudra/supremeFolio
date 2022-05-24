import React from "react";
import { pageEnabled, experience } from "../../portfolio";
import { Header, TopButton, Footer } from "../../components";
import { ExperienceSection, ExperienceAccordion } from "../../containers";

const Experience = (props) => {
  const theme = props.theme;
  if (!pageEnabled.experience) {
    return null;
  }
  return (
    <div className="main-page">
      <Header theme={theme} />
      <ExperienceSection theme={theme} />
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Experience;
