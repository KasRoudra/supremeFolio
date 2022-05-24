import React from "react";
import { contactPageData } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactPageData.title}</h1>
          <p className="subTitle contact-subtitle">
            {contactPageData.subtitle}
          </p>

          <div className="contact-text-div">
            <a
              className="contact-detail"
              href={"tel:" + contactPageData.number}
            >
              {contactPageData.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + contactPageData.email_address}
            >
              {contactPageData.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt="Working"
            src={require("../../assets/images/contactMail.png")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
