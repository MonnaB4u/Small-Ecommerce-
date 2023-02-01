import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import HeaderMain from './HeaderMain';

const AllHeaderComponent = () => {
    return (
        <div>
            <header>
                <Navbar />
                <Header />
                <HeaderMain />
                <Footer></Footer>
            </header>
        </div>
    );
};

export default AllHeaderComponent;
