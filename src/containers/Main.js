import React, {useContext} from "react";
import { Route, Switch, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Hobbies from "../pages/hobbies/Hobbies";
import Education from "../pages/education/Education";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import { routerValue, pageEnabled } from "../portfolio.js";
import Error404 from "../pages/errors/Error";
import StyleContext from "../contexts/StyleContext";
import { darkTheme } from "../theme";

const Main = (props) => {
    const viewExperience = pageEnabled.experience;
    const viewEducation = pageEnabled.education;
    const viewProjects = pageEnabled.projects;
    const viewopenSource = pageEnabled.opensource;
    const viewHobbbies = pageEnabled.hobbies;
    const viewSplash = pageEnabled.splash;
    
    const {isDark} = useContext(StyleContext);
    const theme = isDark ? darkTheme : props.theme;
    
    var Router;
    if(routerValue==="HashRouter"){
    	Router= HashRouter
    }	
    else if(routerValue==="BrowserRouter"){
    	Router= BrowserRouter
    }	
    else{
    	Router= HashRouter
    }	
    if (viewSplash) {
      return (
        <div style={{ backgroundColor: theme.body }}>
          <Router basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  
                  <Splash {...props} theme={theme} />
                  
                )}
              />
              <Route
                path="/home"
                render={(props) => (
                
                <Home {...props} theme={theme} />
                
                )}
              />
              { viewExperience && (
              <Route
                path="/experience"
                exact
                render={(props) => (
                
                  <Experience {...props} theme={theme} />
                
                )}
              />
               )}
               { viewHobbbies && (
               <Route
                path="/hobbies"
                render={(props) => (
                  
                  <Hobbies {...props} theme={theme} />
                  
                )}
                />
               )}
               { viewEducation && (
              <Route
                path="/education"
                render={(props) => (
                  
                  <Education {...props} theme={theme} />
                  
                )}
              />
               )}
               { viewopenSource && (
              <Route
                path="/opensource"
                render={(props) => (
                  
                  <Opensource {...props} theme={theme} />
                  
                )}
              />
               )}
              <Route
                path="/contact"
                render={(props) => (
                  
                  <Contact {...props} theme={theme} />
                  
                )}
              />
              <Route
                path="/splash"
                render={(props) => (
                  
                  <Splash {...props} theme={theme} />
                  
                )}
              />
              { viewProjects && (
              <Route
                path="/projects"
                render={(props) => (
                  
                  <Projects {...props} theme={theme} />
                  
                )}
              />
               )}
              <Route
                path="*"
                render={(props) => (
                  
                  <Error404 {...props} theme={theme} />
                  
                )}
              />
            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <div style={{backgorundColor: theme.body}}>
          <Router basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={theme} />}
              />
              <Route
                path="/home"
                render={(props) => (
                
                <Home {...props} theme={theme} />
                
                )}
              />
              { viewExperience && (
              <Route
                path="/experience"
                exact
                render={(props) => (
                
                <Experience {...props} theme={theme} />
                
                )}
              />
               )}
               { viewHobbbies && (
               <Route
                path="/hobbies"
                render={(props) => (
                
                <Hobbies {...props} theme={theme} />
                
                )}
                />
               )}
               { viewEducation && (
              <Route
                path="/education"
                render={(props) => (
                
                <Education {...props} theme={theme} />
                
                )}
              />
               )}
               { viewopenSource && (
              <Route
                path="/opensource"
                render={(props) => (
                
                <Opensource {...props} theme={theme} />
                
                )}
              />
               )}
              <Route
                path="/contact"
                render={(props) => (
                
                <Contact {...props} theme={theme} />
                
                )}
              />
              {/* <Route
							path="/splash"
							render={(props) => (
								<Splash
									{...props}
									theme={theme}
								/>
							)}
						/> */}
              { viewProjects && (
              <Route
                path="/projects"
                render={(props) => (
                
                <Projects {...props} theme={theme} />
                
                )}
              />
               )}
             <Route
                path="*"
                render={(props) => (
                
                <Error404 {...props} theme={theme} />
                
                )}
              />     
            </Switch>
          </Router>
        </div>
      );
    }
}
export default Main;
