import React from 'react';
import {
    FaShoppingCart
} from "react-icons/fa";
import  imageDetail from "./images/img1.png";
import "./ProductDetail.css";

export default function ProductDetail(props) {
    const style = { fontSize: "2rem", marginTop: "15px", marginRight: "40px"}
    return (
        <div className="detail">
            <div className="box-detail">
                <div className="box-detail_img">
                    <img className="box-detail_img1" src={imageDetail} alt="" />
                </div>
                <div className="box-detail_title">
                    <h1>T-shirt Yellow 1.0</h1>
                    <span>ID: #1</span>
                    <div className="box-detail_title-price">
                        <p>$</p>
                        <span>9.87</span>
                    </div>
                    <div className="box-detail_title-sold">
                        <span>Sold: 189</span>
                    </div>
                    <div className="box-detail_title-script">
                        <span>Discription:</span>
                    </div>
                    <p>How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node. Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so</p>
                    <div className="box-detail_title-buy">
                        <FaShoppingCart style={style} />
                        <button className="box-detail_title-btn-buy">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}