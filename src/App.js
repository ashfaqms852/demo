import React, { Component } from 'react';
import parentclasses from './App.css';
import cx from 'classnames';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Home/>
        <AboutMe/>
        <div className = { cx("container-fluid", parentclasses.resume) }>
          <div className={ cx("container", parentclasses["resume-section"]) } id="education">
            <Education/>
          </div>
          <hr/>
          <div className={ cx("container", parentclasses["resume-section"]) } id="work">
            <Work/>
          </div> 
          <div className={ cx("container", parentclasses["resume-section"]) } id="skills">
            <Skills/>
          </div>      
        </div>
      </div>
    );
  }
}

export default App;
