import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './style.css'
import { faBars, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Pagination from '../Pagination/Pagination';

const Navbar = () => {
    const [style, setSyle] = useState("hidden")

    const clickHide = () => {
        if (style !== "hidden") {
            setSyle("hidden")
        } else {
            setSyle("hideME")
        }

    }

    return (
        <div>
            <i id="menu-icon" onClick={() => clickHide()}> <FontAwesomeIcon icon={faBars} className="fa-2x fas" /></i>
            <nav className={style} id="menu">
                <ul class="nav-upper flex-space-around ">

                    <li class="nav_list">
                        <a href="/" class="nav-link">Home</a>
                    </li>

                    <li class="nav_list">
                        <a href="/register" class="nav-link">Register</a>
                    </li>

                    <li class="nav_list">
                        <a href="/contact" class="nav-link">Contact</a>
                    </li>

                    <li class="nav_list">
                        <a href="/login" class="nav-link">Login</a>
                    </li>

                    <li class="nav_list">
                        <a href="/profile" class="nav-link">
                            <img class="profile-icon"
                                src="https://optimistic-villani-e2675d.netlify.app/static/media/bank-removebg-preview.5dc5e7dc6a24dd7c1ab1.png"
                                alt="" />
                        </a>
                    </li>

                </ul>
                {/*
        <!-- Nav Lower --> */}

                <ul class="nav-lower flex-space-around">

                    <li class="nav_list">
                        <a href="index.html" class="nav_brand nav-link" title="">Munna Expresss</a>
                    </li>

                    <li class="nav_list">
                        <a href="cart.html" class="nav_link nav-link" title="">
                            <span > <FontAwesomeIcon icon={faCartArrowDown} /></span>
                            Cart 2 product-$124.40
                        </a>
                    </li>

                </ul>

            </nav>
            {/* <!-- Nav bar end here --> */}

        </div>
    );
};

export default Navbar;
