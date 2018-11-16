import React from 'react';
import classes from './CustomFooter.css';
import cx from 'classnames';

const customFooter = () => {
    return (
        <footer>
            <div className={ cx("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12") }>
                <ul className={ classes["social-links"] }>
                    <li><a href="https://facebook.com/AshfaqSherwa" target = "_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/ashfaq852" target = "_blank"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/ashfaqsherwa/" target = "_blank"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="skype:ashfaq.sherwa?chat" target = "_blank"><i className="fa fa-skype"></i></a></li>
                </ul>
            </div>
            <div className={ cx("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12") }>
                <p><strong>Copyright © 2018 Ashfaq Sherwa | Created using Bootstrap &amp; ReactJS</strong></p>
            </div>
        </footer>
    );
}

export default customFooter;