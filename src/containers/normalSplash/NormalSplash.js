import React from "react";
import { splashScreen } from "../../portfolio";
import LoaderLogo from "../../components/loader/LoaderLogo.js";
import "./NormalSplash.css";

const NormalSplash = (props) => {
  const theme = props.theme;
  if (splashScreen.useLottie) return null;
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.body }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
};

export default NormalSplash;
