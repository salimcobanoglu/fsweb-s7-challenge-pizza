import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Order.css";

const Order = () => {
  return (
    <div className="order-container">
      <img className="logo" src="./logo.svg" alt="teknolojik yemekler" />
      <p>TEBRIKLER!</p>
      <p>SIPARISINIZ ALINDI!</p>
      <NavLink to="/">
        <button className="primary-button">Anasayfa</button>
      </NavLink>
    </div>
  );
};
export default Order;
