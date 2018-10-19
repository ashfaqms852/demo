import React, { Component } from 'react';
import SkillsIcon from './../../assets/images/skills-icon.png';
import parentclasses from './../../App.css';
import classes from './Skills.css';
import cx from 'classnames';

class Skills extends Component {

    constructor(props) {
        super(props);
        this.skillsRef = React.createRef();
        this.state = {
            skillsInfo: [
                {
                    name: 'HTML / CSS / Bootstrap',
                    value: '0'
                },
                {
                    name: 'PHP Laravel / Wordpress',
                    value: '0'
                },
                {
                    name: 'SPA / ReactJS / AngularJS',
                    value: '0'
                },
                {
                    name: 'JavaScript / jQuery',
                    value: '0'
                },
                {
                    name: 'AWS / Microsoft Azure',
                    value: '0'
                },
                {
                    name: 'MySQL / SQLServer / Firebase',
                    value: '0'
                }
            ]
        }
    }


    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event)  => {

        var el = this.skillsRef.current;

        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
      
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
      
        if (
                top >= window.pageYOffset &&
                left >= window.pageXOffset &&
                (top + height) <= (window.pageYOffset + window.innerHeight) &&
                (left + width) <= (window.pageXOffset + window.innerWidth)
            ) {

                var temp = this.state.skillsInfo;

                temp = [
                    {
                        name: 'HTML / CSS / Bootstrap',
                        value: '95'
                    },
                    {
                        name: 'PHP Laravel / Wordpress',
                        value: '85'
                    },
                    {
                        name: 'SPA / ReactJS / AngularJS',
                        value: '75'
                    },
                    {
                        name: 'JavaScript / jQuery',
                        value: '95'
                    },
                    {
                        name: 'AWS / Microsoft Azure',
                        value: '70'
                    },
                    {
                        name: 'MySQL / SQLServer / Firebase',
                        value: '90'
                    }
                ];

                this.setState({
                    skillsInfo: temp
                });
            }
            else {
                var temp = this.state.skillsInfo;
                
                temp = [
                    {
                        name: 'HTML / CSS / Bootstrap',
                        value: '0'
                    },
                    {
                        name: 'PHP Laravel / Wordpress',
                        value: '0'
                    },
                    {
                        name: 'SPA / ReactJS / AngularJS',
                        value: '0'
                    },
                    {
                        name: 'JavaScript / jQuery',
                        value: '0'
                    },
                    {
                        name: 'AWS / Microsoft Azure',
                        value: '0'
                    },
                    {
                        name: 'MySQL / SQLServer / Firebase',
                        value: '0'
                    }
                ];

                this.setState({
                    skillsInfo: temp
                });
            }
        
    }

    render = () => {
        
        return(
            <div className="row" ref = { this.skillsRef } id = "skillss">
                <div className={ cx("col-lg-3", "col-md-3", "col-sm-3", "col-xs-12") }>
                    <img className={ parentclasses["custom-image"] } alt="Education Icon" src={ SkillsIcon } />
                </div>
                <div className={ cx("col-lg-9", "col-md-9", "col-sm-9", "col-xs-12") }>
                    <div className={ classes["skill-items"] }>
                        {
                            this.state.skillsInfo.map( (val, index) => {
                                return (
                                    <div key = { index }>
                                        <div className={ cx("progress", "skill-bar", classes["dr-progress"]) }>
                                            <div  style = { { 'width':  val.value + '%' } } className={ cx("progress-bar", "progress-bar-success", classes["dr-progress-bar"]) } 
                                                    role="progressbar" aria-valuenow={  val.value  } aria-valuemin={0} aria-valuemax={100} value= { val.name }>
                                                <span className={ classes.skill }> { val.name } <i className={ classes.val }>{ val.value + '%' }</i></span>
                                            </div>
                                        </div>
                                        <br/>
                                    </div>
                                    
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        );
    }

}

export default Skills;