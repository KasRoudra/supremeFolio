import React from "react";
import { Accordion, Panel } from "baseui/accordion";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

const ExperienceAccordion = (props) => {
  const { theme, sections } = props;
  return (
    <div className="experience-accord">
      <Accordion>
        {sections.map((section) => {
          return (
            <Panel
              className="accord-panel"
              title={section["title"]}
              key={section["title"]}
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: `${theme.jacketColor}`,
                    border: `1px solid ${theme.headerColor}`,
                    borderRadius: `5px`,
                    marginBottom: `3px`,
                    fontFamily: "Google Sans Regular",
                    outline: "none",
                    boxShadow: "none",
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                    border: `1px solid rgba(0, 0, 0, 0.1)`,
                    borderRadius: `5px`,
                  }),
                },
              }}
            >
              {section["experiences"].map((experience) => {
                return (
                  <ExperienceCard
                    experience={experience}
                    theme={theme}
                    key={experience.title}
                  />
                );
              })}
            </Panel>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExperienceAccordion;
