import React from 'react';
import { useState } from 'react';
import './HeaderMain.css'
import Data from '../HeaderMain/Data.js/Data'
import { useNavigate, useParams } from 'react-router-dom';

const Products = () => {
    const [data] = useState(Data)
    const navigate = useNavigate()
    return (
        <section className="products">
            {
                data.map((each, index) =>
                    <>
                        <article className="product card">

                            <div className="badge">
                                <span>{each.stock} in stock</span>
                                <hr className="hr-design" />
                                <span>{each.sold}sold</span>
                            </div>

                            <img className="product_img" src={each.img} alt="product1" />
                            <div className="production_body">
                                <h3 className="producti_name">{each.name}</h3>
                                <p>
                                    <span className="dot green"></span>
                                    <span className="dot red"></span>
                                    <span className="dot black"></span>
                                </p>
                                <p className="production_description">
                                    {each.description}
                                    <a href="" className="learnmore">Learn More</a>
                                </p>
                                <h4 className="product_price">{each.price}</h4>
                                <p className="product_rating">Rating 4.5/5</p>
                                <button className="btn product_button" onClick={() => navigate(`/ProductDetails/${each.id}`)}>Add to Cart</button>
                            </div>

                        </article>
                    </>
                )
            }

        </section>
    );
};

export default Products;
