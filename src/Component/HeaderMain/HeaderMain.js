import React from 'react';
import Pagination from '../Pagination/Pagination';
import './HeaderMain.css';
import MainContent from './MainContent';

const HeaderMain = () => {
    return (
        <main className="flex-center" id="header-main">
            <div className="sidebar">
                <section className="categories_section">

                    <h3 className="section-title">Categories</h3>

                    <ul className="list">

                        <li className="list_item">
                            <label htmlFor="phone">
                                <input type="checkbox" name="phone" id="phone" value="phone" />
                                Phone
                            </label>
                        </li>
                        <li className="list_item">
                            <label htmlFor="phone">
                                <input type="checkbox" name="phone" id="phone" value="phone" />
                                Phone
                            </label>
                        </li>

                        <li className="list_item">
                            <label htmlFor="Tablets">
                                <input type="checkbox" name="Tablets" id="phone" value="Tablets" />
                                Tablets
                            </label>
                        </li>

                        <li className="list_item">
                            <label htmlFor="Television">
                                <input type="checkbox" name="Television" id="Television" value="Television" />
                                Television
                            </label>
                        </li>

                        <li className="list_item">
                            <label htmlFor="Computers">
                                <input type="checkbox" name="Computers" id="Television" value="Computers" />
                                Computers
                            </label>
                        </li>

                        <li className="list_item">
                            <label htmlFor="HeadPhones">
                                <input type="checkbox" name="HeadPhones" id="Television" value="HeadPhones" />
                                HeadPhones
                            </label>
                        </li>
                        <li className="list_item">
                            <label htmlFor="Smart-Home">
                                <input type="checkbox" name="Smart-Home" id="Television" value="Smart-Home" />
                                Smart-Home
                            </label>
                        </li>
                    </ul>
                </section>


                <section className="categories_section">

                    <h3 className="section-title"> Price Range</h3>

                    <ul className="list">

                        <li className="list_item">
                            <label htmlFor="price1">
                                <input type="radio" name="price1" id="price" value="[0-20]" />
                                $0-$20
                            </label>
                        </li>

                        <li className="list_item">
                            <label htmlFor="price2">
                                <input type="radio" name="price2" id="price" value="[20-30]" />
                                $20-$30
                            </label>
                        </li>

                        <li className="list_item">
                            <label htmlFor="price3">
                                <input type="radio" name="price3" id="price" value="[30-40]" />
                                $30-$40
                            </label>
                        </li>

                        <li className="list_item">
                            <label htmlFor="price4">
                                <input type="radio" name="price4" id="price" value="[50-60]" />
                                $50-60
                            </label>
                        </li>

                         <li className="list_item">
                            <label htmlFor="price5">
                                <input type="radio" name="price5" id="price" value="[400-500]" />
                                $500-600
                            </label>
                        </li>
                    </ul>
                </section>


                <section className="categories_section">

                    <h3 className="section-title">Shipping Options</h3>

                    <ul className="list">

                        <li className="list_item">
                            <label htmlFor="free">
                                <input type="radio" name="shipping" id="shipping" value="free" />
                               Free shipping
                            </label>
                        </li>

                         <li className="list_item">
                            <label htmlFor="paid">
                                <input type="radio" name="paid" id="shipping" value="paid" />
                                Paid shipping
                            </label>
                        </li>

                    </ul>
                </section>

            </div>
            <div className="main-content ">
                <MainContent></MainContent>
               <Pagination/>
            </div>
        </main>
    );
};

export default HeaderMain;
