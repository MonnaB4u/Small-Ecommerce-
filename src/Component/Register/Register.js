import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Register.css'
const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="registration-head">
                <div className="register">

                    <h2 className="section-title text-center"> Registration </h2>

                        <div className="card">
                            <form action="" className="form">

                                <div className="form-control flex-center">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Please enter your name" />
                                </div>

                                <div className="form-control flex-center">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" placeholder=" enterPlease your email" />
                                </div>

                                <div className="form-control flex-center">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" id="password" placeholder="Please enter your password" />
                                </div>

                                <div className="form-control flex-center">
                                    <label htmlFor="password">Password</label>
                                    <textarea name="about" id="about">Aboud Me</textarea>
                                </div>

                                <div className="form-control flex-center form-btn-field">
                                    <button className="btn contact-btn">Submit</button>
                                </div>

                            </form>

                        </div>


                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Register;
