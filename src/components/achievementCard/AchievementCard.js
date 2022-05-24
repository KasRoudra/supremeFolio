import React from "react";
import "./AchievementCard.css";

const AchivementCard = (props) => {
  const { theme, cardInfo } = props;
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title" style={{ color: theme.text }}>
          {cardInfo.title}
        </h5>
        <p className="card-subtitle" style={{ color: theme.secondaryText }}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <p onClick={() => openUrlInNewTab(v.url)} key={v.url}>
              {v.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AchivementCard;
