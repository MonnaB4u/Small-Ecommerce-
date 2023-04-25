import { faAdd, faDeleteLeft, faMinus, faTrashAlt, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCcAmazonPay, FaCcAmex, FaCcApplePay, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Data from '../HeaderMain/Data.js/Data'
import { useState } from 'react';
import './Cart.css'

const Cart = () => {
    const [data] = useState(Data)
    const { id } = useParams()
    const CartData = data.find(data => data.id === id)

    // console.log(CartData)
    // const [number, setNumber] = useState(productPieces)
    const [productPieces, setProductPieces] = useState([])

    const handlePrd = (data) => {
        let pd = [...productPieces, data]
        setProductPieces(pd)
    }

    const handleDcart = e => {
        let newPost = [...productPieces];
        newPost.splice(0, 1);
        setProductPieces(newPost);
    }

    const total =productPieces.reduce((total, prd) => total + prd.price, 0);
console.log(total);
    let shipping = 0
    if (total > 700) {
        shipping = 0
    } else if (total >= 300) {
        shipping = 30
    } else if (shipping > 250) {
        shipping = 40
    }
    let grandTotal =Math.floor(total+shipping)

    return (
        <div>
            <Navbar></Navbar>
            <main>
                <div className="cart flex-center">
                    <div className="cart_items">

                        <div className="cart_tems-heading card">
                            <h2>Shopping Cart[2 items]</h2>

                            <div className="cart_items-action">
                                <label htmlFor="select">
                                    <input type="checkbox" name='select' id="select" />
                                    Select all items
                                </label>
                                <button> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                                <button>Shop More </button>
                            </div>

                        </div>

                        <div className="cart_item card flex-space-around">

                            <input type="checkbox" />
                            <img className="cart_items-img" src={CartData.img} alt="" />

                            <div className="cart-item-description">
                                <h3 className="production_name">{CartData.name} </h3>
                                <h4 className="production_price">{CartData.price}</h4>
                                {productPieces == 0 ? <p className="cart_item-shipping">Cart is Empty</p> : <p className="cart_item-shipping">{shipping === 0 ? "Free Shipping" : shipping}</p>}
                            </div>

                            <div className="cart_item-action">
                                <button className="btn "> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                                <div className="">
                                    <button onClick={() => handleDcart(CartData)} className="btn "> <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> </button>
                                    <span>{productPieces.length}</span>
                                    <button onClick={() => handlePrd(CartData)} className="btn "> <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="cart_payment">

                        <div className="cart_payment-summery card">
                            <h2>Payment Summery</h2>
                            <div className="">
                                <p>Subtotal</p>
                                <p>${total}</p>
                            </div>
                            <div className="">
                                <p>Shipping Cost</p>
                                {/* <p>{shipping === 0 ? "Free Shipping" : shipping}</p> */}
                                {/* <p className="cart_item-shipping">{shipping === 0 ? "Free Shipping" : shipping}</p> */}
                                {productPieces == 0 ? <p className="cart_item-shipping">Cart is Empty</p> : <p className="cart_item-shipping">{shipping === 0 ? "Free Shipping" : shipping}</p>}
                            </div>
                            <div className="">
                                <p>Total Cost</p>
                                <p>${grandTotal.toFixed(2)}</p>
                            </div>
                            <button className="btn cart_payment-btn">Pay Now</button>
                        </div>

                        <div className="cart_payment-methods card">
                            <h2>Payment Methods</h2>
                            <div className="">
                                <i> <FaCcVisa className="fa-3x" /> </i>
                                <i> <FaCcApplePay className="fa-3x" /> </i>
                                <i> <FaCcAmazonPay className="fa-3x" /> </i>
                                <i> <FaCcAmex className="fa-3x" /> </i>
                                <i> <FaCcPaypal className="fa-3x" /> </i>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;
