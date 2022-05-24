import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, HobbiesCard, TopButton, Footer } from "../../components";
import { HobbiesSection } from "../../containers";

const Hobbies = (props) => {
  const theme = props.theme;
  if (!pageEnabled.hobbies) {
    return null;
  }
  return (
    <div className="main-page">
      <Header theme={theme} />
      <HobbiesSection theme={theme} />
      <HobbiesCard theme={theme} />
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Hobbies;
