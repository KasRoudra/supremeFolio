import React, {Component} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import HobbiesSection from "../../containers/hobbiesSection/HobbiesSection";
import HobbiesCard from "../../components/hobbiesCard/HobbiesCard.js";


class Hobbies extends Component {
	render() {
	const theme = this.props.theme;
    return (
      <div className="Pages">
        <Header theme={theme} />
        <HobbiesSection theme={theme} />
        <HobbiesCard theme={theme} />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
     </div>
    );
  }  
}

export default Hobbies;