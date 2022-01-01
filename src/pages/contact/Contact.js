import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ContactSection from "../../containers/contactSection/ContactSection";
import BlogSection from "../../containers/blogSection/BlogSection";
import AddressSection from "../../containers/addressSection/AddressSection";
import ContactMessage from "../../containers/contactMessage/ContactMessage";
import { pageEnabled } from "../../portfolio";
import "./Contact.css";

class Contact extends Component {
    render() {
    const theme = this.props.theme;
    if (!pageEnabled.contact){
    	return null;
     }
    return (
      <div className="Pages">
        <Header theme={theme} />
        <ContactSection theme={theme} />
        <BlogSection theme={theme} />
        <AddressSection theme={theme} />
        <ContactMessage theme={theme} />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }  
}

export default Contact;
