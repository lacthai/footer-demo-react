import React from 'react';
import {
    FaPlus, FaMinus,
    FaShoppingBasket
} from "react-icons/fa";
import "./Checkout.css";

export default function Checkout(props) {
    const style = { fontSize: "2.4rem" };
    return (
        <div className="cart">
            <div className="cart-container">

                <div className="cart-container_title">
                    <span>Shopping Cart</span>
                    <a href="#" className="btn-remove_cart">Remove all</a>
                </div>

                <div className="cart-container_detail">
                    <div className="cart-container_detail-img"></div>
                    <div className="cart-container_detail-title">
                        <h1>Lucky Cat T-Shirt</h1>
                        <span>Kiikii Osaka</span>
                    </div>
                    <div className="cart-container_detail-change">
                        <button><FaPlus /></button>
                        <span>2</span>
                        <button><FaMinus /></button>
                    </div>
                    <div className="cart-container_detail-price">
                        <span>$2.99</span>
                        <a href="#" className="cart-container_detail-price-remove"><i className="fa-solid fa-delete-left"></i></a>
                    </div>
                </div>

                <div className="cart-container_detail">
                    <div className="cart-container_detail-img cart-container_detail-img2"></div>
                    <div className="cart-container_detail-title">
                        <h1>Blank and plain white sweater</h1>
                        <span>Mediamodifier</span>
                    </div>
                    <div className="cart-container_detail-change">
                        <button><FaPlus /></button>
                        <span>1</span>
                        <button><FaMinus /></button>
                    </div>
                    <div className="cart-container_detail-price">
                        <span>$1.99</span>
                        <a href="#" className="cart-container_detail-price-remove"><i className="fa-solid fa-delete-left"></i></a>
                    </div>
                </div>

                <div className="cart-container_line"></div>

                <div className="cart-container_total-price">
                    <div className="cart-container_total-price-icon">
                        <FaShoppingBasket style={style} />
                    </div>
                    <div className="cart-container_total-price-detail">
                        <div className="cart-container_total-price-detail-title">
                            <span>Sub-Total</span>
                            <h1>$4.98</h1>
                        </div>
                        <div className="cart-container_total-price-detail-button">
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}