import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Error404 from "../../containers/error404/Error404";

class Error extends Component {
    render() {
    const theme = this.props.theme;
    return (
    <div className="Pages">
        <Header theme={theme} />
        <Error404 theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
export default Error;