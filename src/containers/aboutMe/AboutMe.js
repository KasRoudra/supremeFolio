import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData } from "../../portfolio";
import { Fade } from "react-reveal";
import UserData from "../../shared/opensource/user.json";
import "./AboutMe.css";

const AboutMe = (props) => {
  if (UserData.data.isHireable) {
    UserData.data.hireable = "Yes";
  } else {
    UserData.data.hireable = "No";
  }
  const theme = props.theme;
  if (UserData.data.length === 0) {
    return null;
  }
  return (
    <div className="about-main">
      <Fade bottom duration={2000} distance="20px">
        <div className="main" id="contact" align="center">
          <h1 className="prof-title" style={{ color: theme.text }}>
            Reach Out to me!
          </h1>
          <div className="row" align="center">
            <div className="main-content-UserData.dataile">
              <div className="blog-header">
                <Fade right duration={2000}>
                  <p
                    className="subTitle blog-sub"
                    style={{ color: theme.secondaryText }}
                  >
                    {contactPageData.contactSection.description}
                  </p>
                </Fade>
              </div>
              {UserData.data.avatarUrl !== null && (
                <div
                  className="image-content-profile"
                  style={{ padding: "20px" }}
                >
                  <Fade left duration={2000}>
                    <img
                      src={UserData.data.avatarUrl}
                      alt={UserData.data.name}
                      className="profile-image"
                    />
                  </Fade>
                </div>
              )}
              {UserData.data.bio !== null && (
                <Fade left duration={2000}>
                  <h2
                    className="bio-text"
                    style={{ color: theme.imageHighlight }}
                  >
                    "{UserData.data.bio}"
                  </h2>
                </Fade>
              )}
              {UserData.data.location !== null && (
                <div
                  className="location-div"
                  style={{ color: theme.secondaryText }}
                >
                  <div className="desc-prof">
                    <svg
                      className="loc-im"
                      viewBox="-0.5 -2 20 19"
                      version="1.1"
                      aria-hidden="true"
                      stroke="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                      ></path>
                    </svg>
                    {UserData.data.location}
                  </div>
                </div>
              )}
              <div className="opp-div">
                <Fade left duration={2000}>
                  <span className="desc-prof" style={{ color: theme.text }}>
                    Open for opportunities: {UserData.data.hireable}
                  </span>
                </Fade>
              </div>
              <SocialMedia theme={theme} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default AboutMe;
