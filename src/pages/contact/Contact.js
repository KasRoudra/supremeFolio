import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, TopButton, Footer } from "../../components";
import {
  ContactSection,
  BlogSection,
  AddressSection,
  ContactMessage,
} from "../../containers";
import "./Contact.css";

const Contact = (props) => {
  const theme = props.theme;
  if (!pageEnabled.contact) {
    return null;
  }
  return (
    <div className="main-page">
      <Header theme={theme} />
      <ContactSection theme={theme} />
      <BlogSection theme={theme} />
      <AddressSection theme={theme} />
      <ContactMessage theme={theme} />
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
