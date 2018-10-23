import React from 'react';
import classes from './ConnectIcons.css';
import cx from 'classnames';

const connectIcons = () => {

    return(
        <div className={ cx("col-xs-12", "col-sm-12", "col-md-12", "col-lg-4") }>
            <table className={ classes["connect-icons"] }>
                <tbody><tr>
                    <td className="text-center"><i className="fa fa-map-marker fa-3x" aria-hidden="true" /></td>
                    </tr>
                    <tr>
                    <td className="text-center"><p><a href="https://www.google.com/maps/search/?api=1&query=houston+tx" target="_blank" rel="noopener noreferrer"
                        className={ classes["black-anchor"] }>Houston, TX</a></p></td>
                    </tr>
                    <tr>
                    <td className="text-center"><i className="fa fa-envelope fa-2x" aria-hidden="true" /></td>
                    </tr>
                    <tr>
                    <td className="text-center"><p><a href="mailto:ashfaqms852@gmail.com" className={ classes["black-anchor"] }>ashfaqms852@gmail.com</a></p></td>
                    </tr>
                    <tr>
                    <td className="text-center"><i className="fa fa-phone fa-2x" aria-hidden="true" /></td>
                    </tr>
                    <tr>
                    <td className="text-center"><p><a href="tel:+15128256086" className={ classes["black-anchor"] }>512-825-6086</a></p></td>
                    </tr>
                </tbody>
            </table>                    
        </div>
      
    );

}

export default connectIcons;