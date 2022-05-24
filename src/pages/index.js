import React, { useContext } from "react";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./home/HomeComponent";
import Hobbies from "./hobbies/Hobbies";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Opensource from "./opensource/Opensource";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Splash from "./splash/Splash";
import { routerValue, pageEnabled } from "../portfolio.js";
import Error404 from "./errors/Error";
import StyleContext from "../contexts/StyleContext";
import { darkTheme } from "../theme";

const Main = (props) => {
  const viewExperience = pageEnabled.experience;
  const viewEducation = pageEnabled.education;
  const viewProjects = pageEnabled.projects;
  const viewopenSource = pageEnabled.opensource;
  const viewHobbbies = pageEnabled.hobbies;
  const viewSplash = pageEnabled.splash;

  const { isDark } = useContext(StyleContext);

  const theme = isDark ? darkTheme : props.theme;
  const Router = routerValue === "BrowserRouter" ? BrowserRouter : HashRouter;
  if (viewSplash) {
    return (
      <div style={{ backgroundColor: theme.body }}>
        <Router>
          <Routes>
            <Route path="/" element={<Splash theme={theme} />} />
            <Route path="/home" element={<Home theme={theme} />} />
            {viewExperience && (
              <Route
                path="/experience"
                element={<Experience theme={theme} />}
              />
            )}
            {viewHobbbies && (
              <Route path="/hobbies" element={<Hobbies theme={theme} />} />
            )}
            {viewEducation && (
              <Route path="/education" element={<Education theme={theme} />} />
            )}
            {viewopenSource && (
              <Route
                path="/opensource"
                element={<Opensource theme={theme} />}
              />
            )}
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/splash" element={<Splash theme={theme} />} />
            {viewProjects && (
              <Route path="/projects" element={<Projects theme={theme} />} />
            )}
            <Route path="*" element={<Error404 theme={theme} />} />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div style={{ backgorundColor: theme.body }}>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/home" element={<Home theme={theme} />} />
            {viewExperience && (
              <Route
                path="/experience"
                element={<Experience theme={theme} />}
              />
            )}
            {viewHobbbies && (
              <Route path="/hobbies" element={<Hobbies theme={theme} />} />
            )}
            {viewEducation && (
              <Route path="/education" element={<Education theme={theme} />} />
            )}
            {viewopenSource && (
              <Route
                path="/opensource"
                element={<Opensource theme={theme} />}
              />
            )}
            <Route path="/contact" element={<Contact theme={theme} />} />
            {/* <Route
							path="/splash"
							render={(props) => (
								<Splash
									{...props}
									theme={theme}
								/>
							)}
						/> */}
            {viewProjects && (
              <Route path="/projects" element={<Projects theme={theme} />} />
            )}
            <Route path="*" element={<Error404 theme={theme} />} />
          </Routes>
        </Router>
      </div>
    );
  }
};
export default Main;
