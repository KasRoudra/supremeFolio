import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="loader-wrapper" style={{ color: theme.body}}><div className="loader"></div></div>
    );
  }
}

export default LogoLoader;
