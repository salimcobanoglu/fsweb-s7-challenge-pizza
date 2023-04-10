import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <img className="logo" src="./logo.svg" alt="teknolojik yemekler" />
      <p>KOD ACIKTIRIR</p>
      <p>PIZZA, DOYURUR</p>

      <Link id="order-pizza" to="/pizza" data-cy="order-pizza">
        <button className="order-btn">ACIKTIM</button>
      </Link>
      <img className="pizza-img" src="./banner.png" alt="pizza" />
    </div>
  );
};
export default Home;
