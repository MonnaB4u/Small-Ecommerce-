import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer flex-space-around">

                <div className="flex-space-around">
                    <label htmlFor="subscribe" className="subscribe">Subscribe to Newsletter:</label>
                    <input type="email" ind="subscribe" name="subscribe" className="footer_input" placeholder='your email address' />
                    <button className="btn btn-subscribe">Subscribe</button>
                </div>

                <div className="">
                    <p>&copy; Copyright 2023 Munna Express. All rights reserved.</p>
                </div>

            </footer>

        </div>
    );
};

export default Footer;
