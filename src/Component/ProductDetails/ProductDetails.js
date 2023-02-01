import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css'
import Data from '../HeaderMain/Data.js/Data'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ProductDetails = () => {

    const [data] = useState(Data)
    const { id } = useParams()
    const details = data.find(data => data.id === id)
    const navigation = useNavigate()

    return (

        <div>
            <Navbar />
            <main className="flex-center hm">
                <div className="main-content">
                    <section className="flex-center product-details">

                        <div className="product-details-left flex-center">
                            <img className="" src={details.img} alt="" />
                        </div>

                        <div className="product-details-right flex-center">
                            <div className="production_body">

                                <h3 className="producti_name">{details.name}</h3>

                                <p>
                                    <span className="dot green"></span>
                                    <span className="dot red"></span>
                                    <span className="dot black"></span>
                                </p>

                                <p className="production_description">
                                    <strong>Description: </strong>
                                    {details.description}
                                </p>

                                <h4 className="product_price"><strong>Price: </strong>{details.price}</h4>
                                <p className="product_rating">Rating 4.5/5</p>
                                <button onClick={() => navigation(`/cart/${details.id}`)} className="btn productdetails_button">Add to Card</button>
                                <button className="btn productdetails_button">Back to HomePage</button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
