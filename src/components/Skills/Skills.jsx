import React, { Component } from 'react';
import SkillsIcon from './../../assets/images/skills-icon.png';
import parentclasses from './../../App.css';
import classes from './Skills.css';
import cx from 'classnames';

class Skills extends Component {

    constructor(props) {
        super(props);
        //this.skillsRef = React.createRef();
    }


    componentDidMount = () => {
        //console.log(this.skillsRef.current);
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () => {
        ///window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event)  => {
        var //hT = document.getElementById('skillss').offset().top,
            //hH = document.getElementById('skillss').outerHeight(),
            //wH = window.height(),
            wS = this.scrollTop();
        /*if (wS > (hT+hH-wH-50)){
            console.log('skills');
        }
        else {
            console.log('not skills');
        }*/
    }

    render = () => {
        
        return(
            <div className="row" id = "skillss">
                <div className={ cx("col-lg-3", "col-md-3", "col-sm-3", "col-xs-12") }>
                    <img className={ parentclasses["custom-image"] } alt="Education Icon" src={ SkillsIcon } />
                </div>
                <div className={ cx("col-lg-9", "col-md-9", "col-sm-9", "col-xs-12") }>
                    <div className={ classes["skill-items"] }>
                        <div className={ cx("progress", "skill-bar", classes["dr-progress"]) }>
                            <div  style = { { 'width': '90%' } } className={ cx("progress-bar", "progress-bar-success", classes["dr-progress-bar"]) } role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} value="HTML / CSS / Bootstrap">
                                <span className={ classes.skill }>HTML / CSS / Bootstrap<i className={ classes.val }>90%</i></span>
                            </div>
                        </div>
                        <br />    
                        <div className={ cx("progress", "skill-bar", classes["dr-progress"]) }>
                            <div className={ cx("progress-bar", "progress-bar-success", classes["dr-progress-bar"]) } role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} value="PHP Laravel / Wordpress">
                            </div>
                        </div>
                        <br />
                        <div className={ cx("progress", "skill-bar", classes["dr-progress"]) }>
                            <div className={ cx("progress-bar", "progress-bar-success", classes["dr-progress-bar"]) } role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} value="SPA / ReactJS / AngularJS">
                            </div>
                        </div>
                        <br />    
                        <div className={ cx("progress", "skill-bar", classes["dr-progress"]) }>
                            <div className={ cx("progress-bar", "progress-bar-success", classes["dr-progress-bar"]) } role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} value="Javascript / jQuery">
                            </div>
                        </div>
                        <br />    
                        <div className={ cx("progress", "skill-bar", classes["dr-progress"]) }>
                            <div className={ cx("progress-bar", "progress-bar-success", classes["dr-progress-bar"]) } role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} value="AWS / Microsoft Azure">
                            </div>
                        </div>
                        <br />    
                        <div className={ cx("progress", "skill-bar", classes["dr-progress"]) }>
                            <div className={ cx("progress-bar", "progress-bar-success", classes["dr-progress-bar"]) } role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} value="MySQL / SQLServer / Firebase">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Skills;