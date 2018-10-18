import React from 'react';
import cx from 'classnames';
import WorkIcon from './../../assets/images/work-icon.png';
import parentclasses from './../../App.css';

const work = () => {
    return(
        <div className="row">
            <div className={ cx("col-lg-3", "col-md-3", "col-sm-3", "col-xs-12") }>
                <img className={ parentclasses["custom-image"] } alt="Education Icon" src={ WorkIcon } />
            </div>
            <div className={ cx("col-lg-9", "col-md-9", "col-sm-9", "col-xs-12") }>
                <div className={ parentclasses["resume-item"] }>
                <h2>Rand Group, TX, U.S.A</h2>
                <p><i>Software Developer | February 2018 - Present</i></p>
                <ul>
                    <li>Develop e-commerce websites using Wordpress, HTML5, CSS3, JS, jQuery, Bootstrap and AJAX. </li>
                    <li>Write PHP scripts to consume third party APIs to integrate payment systems (involving multiple currencies), shipping logistics in e-commerce websites. </li>
                    <li>Setup triggers &amp; functions in MySQL and cron jobs PHP scripts to keep data in sync between two systems.</li>
                    <li>Work with Marketing team to create landing pages, integrate marketing campaigns &amp; setup Google Analytics.</li>
                    <li>Leverage Microsoft's APIs for CRMs like Dynamics, AX &amp; NAV to perform integrations and data migrations.</li>
                </ul>
                </div>
                <div className={ parentclasses["resume-item"] }>
                <h2>Apartment Butler, TX, U.S.A.</h2>
                <p><i>Web Developer | October 2016 - January 2018</i></p>
                <ul>
                    <li>Develop and maintain the home website using HTML5, CSS3 &amp; Bootstrap.</li>
                    <li>Create REST APIs with JWT token-based authentication using PHP Laravel for iOS and Android apps.</li>
                    <li>Perform server management for GoDaddy &amp; AWS to ensure security, manage configurations, SSL certificates and quality control.</li>
                    <li>Research third-party REST APIs and evaluate their feasibility to determine how efficiently we can automate processes for marketing and operations. Based on the findings, write PHP scripts to implement above processes. </li>
                    <li>Create single page applications for operations handling and extra offerings like off-hours pet-care, surge based house-keeping &amp; package delivery using ReactJS</li>
                </ul>
                </div>
            </div>
        </div>

    );

}

export default work;