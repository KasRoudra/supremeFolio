import React from "react";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import "./ContactSection.css";

const ContactSection = (props) => {
  const theme = props.theme;
  const contactSection = contactPageData.contactSection;
  return (
    <div className="basic-contact">
      <Fade bottom duration={1000} distance="40px">
        <div className="contact-heading-div">
          <div className="contact-heading-img-div">
            <img
              src={require(`../../assets/images/${contactSection["profile_image_path"]}`)}
              alt=""
            />
          </div>
          <div className="contact-heading-text-div">
            <h1 className="contact-heading-text" style={{ color: theme.text }}>
              {contactSection["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {contactSection["description"]}
            </p>
            <SocialMedia theme={theme} />
            <div className="resume-btn-div">
              <Button
                text="See My Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default ContactSection;
