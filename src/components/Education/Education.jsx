import React from 'react';
import parentclasses from './../../App.css';
import cx from 'classnames';
import EducationIcon from './../../assets/images/education-icon.png';

const education = () => {
    return(
        
        <div className="row">
            <div className={ cx("col-lg-3", "col-md-3", "col-sm-3", "col-xs-12") }>
            <img className={ parentclasses["custom-image"] } alt="Education Icon" src={ EducationIcon } />
            </div>
            <div className={ cx("col-lg-9", "col-md-9", "col-sm-9", "col-xs-12") }>
            <div className={ parentclasses["resume-item"] }>
                <h2>Clemson University, SC, U.S.A</h2>
                <p><i>M.S. in Computer Science | August 2014 - May 2016</i></p>
                <p>Key Courses - Data Structures and Algorithms, Database Management Systems, Object Oriented Software Design, 
                2D Game Engine Design, Affective Computing, Computer Graphics and Images, Fundamentals of Human-Centered Computing, Software Engineering.</p>
            </div>
            <div className={ parentclasses["resume-item"] } >
                <h2>University of Mumbai, MH, India</h2>
                <p><i>Bachelors in Computer Engineering | August 2009 - May 2013</i></p>
                <p>Key Courses - Data Structures, Theoretical Computer Science, Operating Systems, Computer Networks, Advanced Internet Technologies, Artificial Intelligence, Data Mining</p>
            </div>
            </div>
        </div>

    );
}

export default education;