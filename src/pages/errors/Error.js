import React from "react";
import { Header, TopButton, Footer } from "../../components";
import { Error404 } from "../../containers";

const Error = (props) => {
  const theme = props.theme;
  return (
    <div className="main-page">
      <Header theme={theme} />
      <Error404 theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};
export default Error;
