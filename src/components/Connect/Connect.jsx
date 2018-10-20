import React, { Component } from 'react';
import classes from './Connect.css';
import parentclasses from './../../App.css';
import cx from 'classnames';

class Connect extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('name'));
    }

    render = () => {
        return (
            <div className={ cx("col-xs-12", "col-sm-12", "col-md-12", "col-lg-8", classes["form-contents"]) }>
                <form onSubmit = { this.handleSubmit }>
                    <div className={ cx("row", classes["form-field"]) }>
                        <input type="text" className={ cx("form-control", classes["custom-input-field"]) } placeholder="Your Name" name = "name" required/>
                    </div>
                    <div className={ cx("row", classes["form-field"]) }>
                        <input type="email" className={ cx("form-control", classes["custom-input-field"]) } placeholder="Your Email Address" name = "email" required/>
                    </div>
                    <div className={ cx("row", classes["form-field"]) }>
                        <input type="text" className={ cx("form-control", classes["custom-input-field"]) } placeholder="Subject" name = "subject" required/>
                    </div>
                    <div className={ cx("row", classes["form-field"]) }>
                        <textarea className={ cx("form-control", classes["custom-input-field"]) } rows={4} cols={50} placeholder="Your Message" defaultValue={""} name = "message" required/>
                    </div>
                    <div className={ cx("row", classes["form-field"]) }>
                        <button className={ cx("btn", parentclasses["custom-button"]) }>Send Message</button>
                    </div>
                </form>
            </div>
          
        );
    }
}

export default Connect;



