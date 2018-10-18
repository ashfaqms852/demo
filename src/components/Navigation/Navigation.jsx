import React from 'react';
import classes from './Navigation.css';
import cx from 'classnames';

const navigation = () => {
    return (
        <nav className= {cx("navbar", "navbar-expand-lg","navbar-dark", "fixed-top")} id="navbar">
            <div className="container-fluid">
                <a className={cx("navbar-brand")} href="#">Ashfaq Sherwa</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className={cx("collapse", "navbar-collapse", "navbar-sticky-top")} id="navbarSupportedContent">
                    <ul className={cx("navbar-nav", "mr-auto", classes["nav-list-center"])}>
                        <li className="nav-item">
                            <a className={cx("nav-link", classes["dr-nav-link"])} href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className={cx("nav-link", classes["dr-nav-link"])} href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={cx("nav-link", classes["dr-nav-link"])} href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className={cx("nav-link", classes["dr-nav-link"])} href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className={cx("nav-link", classes["dr-nav-link"])} href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={cx("nav-link", classes["dr-nav-link"])} href="#connect">Connect</a>
                        </li>                    
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default navigation;