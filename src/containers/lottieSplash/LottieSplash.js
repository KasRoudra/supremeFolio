import React from "react";
import { Fade } from "react-reveal";
import { greeting, splashScreen } from "../../portfolio";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import "./LottieSplash.css";

const LottieSplash = (props) => {
  const theme = props.theme;
  const animData = require(`../../assets/lottie/${splashScreen.animationFile}.json`);
  if (!splashScreen.useLottie) return null;
  return (
    <Fade big>
      <div
        className="splash-container main-page"
        style={{ backgroundColor: theme.dark }}
      >
        <div className="splash-animation-container">
          <DisplayLottie animationData={animData} />
        </div>
        <div className="splash-title-container">
          <span className="grey-color" style={{ color: theme.secondaryText }}>
            {" "}
            &lt;
          </span>
          <span className="splash-title" style={{ color: theme.highlight }}>
            {greeting.title}
          </span>
          <span className="grey-color" style={{ color: theme.secondaryText }}>
            /&gt;
          </span>
        </div>
      </div>
    </Fade>
  );
};

export default LottieSplash;
