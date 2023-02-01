import { faComment, faCommentDots, faRocket, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div id="header">
            <div className="banner flex-space-around">
                <marquee className="banner-title" behavior="" direction="">50% Sales going on</marquee>

            <div className="features flex-space-around">

                <article className="feature flex-center">
                    <i className="feature-icon fa-solid"> <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon> </i>
                    <h3> Shipping Within 7 days</h3>
                </article>

                <article className="feature flex-center">
                    <i className="feature-icon fa-solid"> <FontAwesomeIcon icon={faCommentDots} /></i>
                    <h3> Support 24/7</h3>
                </article>

                <article className="feature flex-center">
                    <i className="feature-icon fa-solid"> <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon> </i>
                    <h3> Safe Payment</h3>
                </article>

            </div>
            </div>
        </div>

    );
};

export default Header;
