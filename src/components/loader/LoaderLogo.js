import React from "react";
import "./LoaderLogo.css";

const LoaderLogo = (props) => {
  const theme = props.theme;
  return (
    <div className="loader-wrapper" style={{ color: theme.body }}>
      <div className="loader"></div>
    </div>
  );
};

export default LoaderLogo;
