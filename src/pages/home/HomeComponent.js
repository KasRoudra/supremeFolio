import React, {Component} from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import StartupProjects from "../../containers/startupProjects/StartupProjects";
import Podcast from "../../containers/podcast/Podcast";
import Talks from "../../containers/talks/Talks";
import Twitter from "../../containers/twitter-embed/twitter";
import Blogs from "../../containers/blogs/Blogs";
import AboutMe from "../../containers/aboutMe/AboutMe";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";


class Home extends Component {
	render() {
	const theme = this.props.theme;
    return (
      <div className="Pages">
        <Header theme={theme} />
        <Greeting theme={theme} />
        <Skills theme={theme} />
        <Blogs theme={theme} />
        <StartupProjects theme={theme} />
        <Twitter />
        <Talks theme={theme} />
        <Podcast theme={theme} />
        <AboutMe theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }  
}

export default Home;
