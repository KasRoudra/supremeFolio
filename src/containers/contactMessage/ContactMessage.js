import React, { useState, useEffect, useRef } from "react";
import { contactMessage } from "../../portfolio.js";
import Input from "../../components/input/Input.js";
import emailjs from "@emailjs/browser";
import ContactImg from "./ContactImg";
import "./ContactMessage.css";

const ContactMessage = (props) => {
  const theme = props.theme;
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({});
  const buttonRef = useRef();
  const alertRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    buttonRef.current.disabled = disabled ? true : false;
  }, [disabled]);

  const toggleAlert = () => alertRef.current.classList.toggle("show");

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...formData };
    data[field] = value;
    setFormData(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setDisabled(true);
      await emailjs
        .send(
          contactMessage.serviceID,
          contactMessage.templateID,
          formData,
          contactMessage.emailjsUserID
        )
        .then(
          (response) => {
            if (response.text === "OK") {
              toggleAlert();
            }
          },
          (error) => {
            console.log(error);
          }
        );
      formRef.current.reset();
      setDisabled(false);
      setTimeout(() => {
        toggleAlert();
      }, 5000);
    }
  };

  if (
    !contactMessage.display ||
    contactMessage.emailjsUserID === "none" ||
    contactMessage.serviceID === "none"
  ) {
    return null;
  }
  return (
    <div id="contact" className="mt-4">
      <div className="contactMessage-main">
        <div className="cont-image">
          <ContactImg theme={theme} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-1">
              <h1>
                <i
                  className="far fa-dot-circle fs-3"
                  style={{ color: theme.imageHighlight }}
                ></i>{" "}
                <span style={{ color: theme.text }}>Contact Message</span>
              </h1>
            </div>
            <div className="col-md-12 mb-3 px-5 pt-4">
              <form
                onSubmit={handleSubmit}
                className="form-inline justify-content-center"
                ref={formRef}
                id="cont-form"
              >
                <div className="row mb-1">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    height="60px"
                    onChange={handleChange}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    height="60px"
                    onChange={handleChange}
                  />
                  <Input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    height="60px"
                    onChange={handleChange}
                  />
                  <Input
                    name="message"
                    type="text"
                    placeholder="Message"
                    height="100px"
                    onChange={handleChange}
                  />
                </div>
                <button
                  ref={buttonRef}
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </button>
              </form>
              <div className="fade alert alert-success" ref={alertRef}>
                <div className="alert-heading">
                  Your message has been sent successfully!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
