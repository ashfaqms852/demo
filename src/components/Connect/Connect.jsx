import React, { Component } from 'react';
import classes from './Connect.css';
import parentclasses from './../../App.css';
import cx from 'classnames';

class Connect extends Component {

    render = () => {
        return (
            <div className={ cx("col-xs-12", "col-sm-12", "col-md-12", "col-lg-8", classes["form-contents"]) }>
                <div className={ cx("row", classes["form-field"]) }>
                <input type="text" className={ cx("form-control", classes["custom-input-field"]) } placeholder="Your Name" />
                </div>
                <div className={ cx("row", classes["form-field"]) }>
                <input type="text" className={ cx("form-control", classes["custom-input-field"]) } placeholder="Your Email Address" />
                </div>
                <div className={ cx("row", classes["form-field"]) }>
                <input type="text" className={ cx("form-control", classes["custom-input-field"]) } placeholder="Subject" />
                </div>
                <div className={ cx("row", classes["form-field"]) }>
                <textarea className={ cx("form-control", classes["custom-input-field"]) } rows={4} cols={50} placeholder="Your Message" defaultValue={""} />
                </div>
                <div className={ cx("row", classes["form-field"]) }>
                <button className={ cx("btn", parentclasses["custom-button"]) }>Send Message</button>
                </div>
            </div>
          
        );
    }
}

export default Connect;



