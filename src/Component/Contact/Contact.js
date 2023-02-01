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
                          {/* <Googlemap></Googlemap> */}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
