import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { splashScreen } from "../../portfolio";
import { NormalSplash, LottieSplash } from "../../containers";
//import "./Splash.css";

const Splash = (props) => {
  const theme = props.theme;
  const [navigate, setNavigate] = useState(false);
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setNavigate(true);
    }, splashScreen.duration);
    return () => clearTimeout(splashTimer);
  }, []);
  return (
    <div>
      <NormalSplash theme={theme} />
      <LottieSplash theme={theme} />
      {navigate && <Navigate to="/home" />}
    </div>
  );
};

export default Splash;
