import React from "react";
import { Accordion, Panel } from "baseui/accordion";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

const ExperienceAccordion = (props) => {
    const {theme, sections} = props;
    return (
      <div className="experience-accord">
        <Accordion >
          {sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                style={{backgroundColor: theme.imageHighlight}}
              >
                {section["experiences"].map((experience) => {
                	return (
                    <ExperienceCard experience={experience} theme={theme} key={experience.title}/>
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
}

export default ExperienceAccordion;
