import React from 'react';
import './Contact.css'
// import '../Register/Register.css'
import Navbar from '../Navbar/Navbar';
import Googlemap from './Googlemap';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <main>
                <section class="contact-section">
                    <h2 class="section-title text-center">Contact Us</h2>
                    <div class="contact-conatiner flex-center">

                        <form action="" class="form card">

                            <div class="form-control flex-center">
                                <label for="name">Name</label>
                                <input type="text" id="name" required autocomplete="name" />
                            </div>

                            <div class="form-control flex-center">
                                <label for="email">Email</label>
                                <input type="email" id="email" required autocomplete="email" />
                            </div>

                            <div class="form-control flex-center">
                                <label for="message">Message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>

                            <div class="form-control flex-center form-btn-field">
                                <button type="submit" class="btn contact-btn">submit</button>
                            </div>

                        </form>
                        <div class="contact-address flex-space-around">
                            <address>
                                <h4>Address:</h4>
                                <p>Uttara 9 Number Road</p>
                                <p>Dhaka, Bangladesh</p>
                                <br />

                                <span>Call: </span>
                                <a href="tel:+123456789">+123456789</a>
                            </address>
                            <div className="Contact-map">
                                <div class="map-area">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
