import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, Footer, TopButton } from "../../components";
import {
  OpensourceCharts,
  Organizations,
  PullRequests,
  Issues,
} from "../../containers";

const Opensource = (props) => {
  const theme = props.theme;
  if (!pageEnabled.opensource) {
    return null;
  }
  return (
    <div className="main-page">
      <Header theme={theme} />
      <Organizations theme={theme} />
      <OpensourceCharts theme={theme} />
      <PullRequests theme={theme} />
      <Issues theme={theme} />
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Opensource;
