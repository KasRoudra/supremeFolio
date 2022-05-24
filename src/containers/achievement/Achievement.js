import React from "react";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { certifications } from "../../portfolio";
import "./Achievement.css";

const Achievement = (props) => {
  // function openUrlInNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }
  const theme = props.theme;
  if (!certifications.display) {
    return null;
  }
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1
            className="heading achievement-heading"
            style={{ color: theme.text }}
          >
            {certifications.title}
          </h1>
          <p
            className="subTitle achievement-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certifications.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {certifications.certifications.map((card) => {
            return (
              <AchievementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink,
                }}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
