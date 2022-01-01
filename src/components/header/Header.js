import React, { useContext } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, pageEnabled } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext"

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
  el.style.borderRadius = "5%";
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = (props) => {
    const {isDark}= useContext(StyleContext)
    const theme = props.theme;
    const viewExperience = pageEnabled.experience;
    const viewEducation = pageEnabled.education;
    const viewProjects = pageEnabled.projects;
    const viewopenSource = pageEnabled.opensource;
    const viewHobbbies = pageEnabled.hobbies;
    const viewSplash = pageEnabled.splash;
    const link = viewSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className={isDark ?"navicon navicon-dark" : "navicon"} id="navicon" ></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              { viewEducation && (
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
               )}
               { viewHobbbies && (
               <li>
                <NavLink
                  to="/hobbies"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Hobbies
                </NavLink>
               </li>
                )}
              { viewExperience && (
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              )}
              { viewProjects && (
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
               )}
               { viewopenSource && (
              <li>
                <NavLink
                  to="/opensource"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </NavLink>
              </li>
               )}
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
                </li>
                <li className="switch">
                 <ToggleSwitch />
                 </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  
}
export default Header;
