import React, { Component } from 'react';
import classes from './Connect.css';
import parentclasses from './../../App.css';
import cx from 'classnames';
import * as emailjs from 'emailjs-com';

class Connect extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        alertMessage: ''
    }


    handleSubmit(event) {
        event.preventDefault();
        event.persist();
        const data = new FormData(event.target);
        var templateParams = {
            sender_name: data.get('name'),
            sender_email: data.get('email'),
            subject: data.get('subject'),
            message: data.get('message'),
            reply_to: data.get('email'),
        }
        
        emailjs.init('user_ZGpPyKd4UAUJrlfxV5r8B');
        emailjs.send('mailgun', 'template_2er79jLV', templateParams)
                .then((response) => {
                    if(response.status == '200') {
                        event.target.reset();
                        this.setState({                          
                            alertMessage: 'Success! I will surely get back to you on this. Thanks!'
                        });
                        
                    }
                }, (error) => {
                    this.setState({
                        alertMessage: 'Sorry! Something went wrong. Please try again.'
                    });
                });
        
    }

    render = () => {
        var alert = "";
        if(this.state.alertMessage.length > 1) {
            alert = <div className ={ cx("alert", "alert-danger", "alert-dismissable") } role="alert">
                        <a href="#" className ="close" data-dismiss="alert" aria-label="close">&times;</a>
                        { this.state.alertMessage }
                    </div>
        }
        
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
                { alert }                    
            </div>
          
        );
    }
}

export default Connect;



