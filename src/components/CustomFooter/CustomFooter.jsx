import React from 'react';
import classes from './CustomFooter.css';
import cx from 'classnames';

const customFooter = () => {
    return (
        <footer>
            <div className={ cx("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12") }>
                <ul className={ classes["social-links"] }>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-skype" /></a></li>
                </ul>
            </div>
            <div className={ cx("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12") }>
                <p><strong>Copyright © 2018 Ashfaq Sherwa | Created using Bootstrap &amp; ReactJS</strong></p>
            </div>
        </footer>
    );
}

export default customFooter;