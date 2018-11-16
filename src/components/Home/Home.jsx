import React, { Component } from 'react';
import classes from './Home.css';
import cx from 'classnames';

class Home extends Component {

    TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };

    componentDidMount = () => {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                this.TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    }    

    render = () => { 
    return (

        <header id = "home">

            <div className = {cx("align-items-center", classes["home-content"])}>
                <h1 className = "typewrite" data-period = "2000" data-type = '[ "Ashfaq Sherwa", "Houston, TX based", "Full-Stack Developer" ]'><span className = "wrap"></span></h1>
                <p>
                    Expertise in developing engaging user-interfaces for web, creating REST APIs, leveraging third-party APIs to setup automation/integration, databases and servers/hosting platforms.
                </p>
                <hr/>
                <ul className={ classes.social }>
                    <li><a href="https://facebook.com/AshfaqSherwa" target = "_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/ashfaq852" target = "_blank"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/ashfaqsherwa/" target = "_blank"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="skype:ashfaq.sherwa?chat" target = "_blank"><i className="fa fa-skype"></i></a></li>
                </ul>
                <p className={ classes.scrolldown }>
                    <a className="smoothscroll" href="#about"><i className="fa fa-chevron-circle-down"></i></a>
                </p>
            </div>
            
        </header>

    );
    }
}

export default Home;