import React from 'react';
import ProfilePicture from './../../assets/images/profile-pic.jpg';
import parentclasses from './../../App.css';
import classes from './AboutMe.css';
import Resume from './../../assets/documents/resume.pdf';
import cx from 'classnames';

const aboutme = () => {

    return (
        <div className={cx("container-fluid", parentclasses["custom-section"])} id="about">
            <div className="container">
                <div className="row">
                <div className={ cx("col-lg-3", "col-md-3", "col-sm-3", "col-xs-12") }>
                    <img className={ parentclasses["custom-image"] } alt="DP" src= { ProfilePicture } />
                </div>
                <div className={ cx("col-lg-9", "col-md-9", "col-sm-9", "col-xs-12", classes["about-me-content"]) }>
                    <h1>About Me</h1>
                    <p> 
                    Hi, I'm Ashfaq. I put people's ideas and imaginations on a web-browser for a living. Behind the scenes, I also get my hands dirty with APIs, databases and server management.
                    </p>
                    <p> 
                    To kill the rest of my time, I binge-watch TV shows, read tech-related blogs and answers from my favorite Quorans and watch as many soccer matches as I can. 
                    I am a big Chelsea FC fan, if you like them too, we have lot to talk about. I also like to keep myself updated about start-up news, international politics and latest technology trends.
                    </p>
                    <hr />
                    <div className="row">
                    <div className={ cx("col-lg-6", "col-md-6", "col-sm-6", "col-xs-12") }>
                        <h3>Interests-</h3>
                        <span>
                        <i className="fa fa-futbol-o" aria-hidden="true" /> &nbsp;
                            <a className={classes["love-anchor"]} href="https://en.wikipedia.org/wiki/Chelsea_F.C." target="_blank" rel="noopener noreferrer">Chelsea FC</a><br />
                        <i className="fa fa-television" aria-hidden="true" /> &nbsp;
                        <a className={classes["love-anchor"]} href="https://www.imdb.com/title/tt0306414/" target="blank" rel="noopener noreferrer">The Wire</a>,&nbsp; 
                        <a className={classes["love-anchor"]} href="https://www.imdb.com/title/tt0903747" target="_blank" rel="noopener noreferrer">Breaking Bad</a><br />
                        <i className="fa fa-music" aria-hidden="true" /> &nbsp;
                        <a className={classes["love-anchor"]} href="https://en.wikipedia.org/wiki/A._R._Rahman" target="_blank" rel="noopener noreferrer">A.R. Rahman</a>,&nbsp; 
                        <a className={classes["love-anchor"]} href="https://en.wikipedia.org/wiki/Amit_Trivedi" target="_blank" rel="noopener noreferrer">Amit Trivedi</a><br />
                        <i className="fa fa-book" aria-hidden="true" /> &nbsp;
                        <a className={classes["love-anchor"]} href="https://quora.com" target="_blank" rel="noopener noreferrer">Quora</a>,&nbsp; 
                        <a className={classes["love-anchor"]} href="https://medium.com/" target="_blank" rel="noopener noreferrer">Medium</a><br />
                        </span>
                    </div>
                    <div className={ cx("col-lg-6", "col-md-6", "col-sm-6", "col-xs-12", classes["download-resume"]) }>
                        <a className={ cx("btn", parentclasses["custom-button"], classes["black-anchor"]) } target = "_blank" href = { Resume }><i className="fa fa-download" /> Download Resume</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    );

}

export default aboutme;