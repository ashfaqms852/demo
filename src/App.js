import React, { Component } from 'react';
import parentclasses from './App.css';
import cx from 'classnames';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Connect from './components/Connect/Connect';
import ConnectIcons from './components/ConnectIcons/ConnectIcons';
import CustomFooter from './components/CustomFooter/CustomFooter';

class App extends Component {

  state = {
    home: ''
  }

  componentDidMount = () => {
    window.onscroll = this.scrollFunction;
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("go-to-top").style.display = "block";
    } else {
        document.getElementById("go-to-top").style.display = "none";
    }
  }

  goToTop = () => {
    window.location = '#home';
  }

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
        <div className = { cx("container-fluid", parentclasses["custom-section"]) } id = "connect">     
          <div className = "container">
            <div>
              <h2 className = { parentclasses["custom-align-center"] }>Let's Connect</h2><br/>
              <p className = { parentclasses["custom-align-center"] }>If you have any work opportunities for me, lets get in touch. If not, what's the harm in connecting? </p>
              <p className = { parentclasses["custom-align-center"] }>Maybe you hate Chelsea FC? Or you have some suggestions? Its easy to get along with me.</p>
            </div>
            <hr/>
            <div className = "row">
              <Connect/>
              <ConnectIcons/>
            </div>
          </div>
        </div>
        <button onClick={ this.goToTop } id = "go-to-top" className = { parentclasses["go-to-top"] }><i className="fa fa-chevron-circle-up fa-2x"></i></button>
        <CustomFooter/>
      </div>
    );
  }
}

export default App;
