import React from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

const Footer = (props) => {
  const theme = props.theme;
  return (
    <div className="footer-div" style={{ backgroundColor: theme.body }}>
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        <br />
      </Fade>
    </div>
  );
};

export default Footer;
