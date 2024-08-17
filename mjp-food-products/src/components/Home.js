import React from "react";
import "../style/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import kottu from "../images/kottu.jpeg";
import parata from "../images/parata.jpeg";
import godamba from "../images/godamba.jpeg";
import cake from "../images/cake.jpeg";
import banner from "../images/home1.png";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="banner">
        <img src={banner} alt="Delicious Food Banner" />
      </div>
      <section className="introduction">
        <h1>Welcome to MJS Food Products</h1>
        <p>
          At MJS Food Products, we are dedicated to bringing you the finest
          selection of delicious sweets and spicy dishes. Our offerings are
          crafted with the highest quality ingredients to ensure a delightful
          culinary experience.
        </p>
      </section>
      <section className="featured-items">
        <h2>Featured Items</h2>
        <div className="items">
          <div className="item">
            <img src={kottu} alt="Kottu" />
            <h3>Kottu</h3>
            <p>
              A popular Sri Lankan dish made with chopped flatbread, vegetables,
              and spices.
            </p>
          </div>
          <div className="item">
            <img src={parata} alt="Parata" />
            <h3>Parata</h3>
            <p>
              Flaky and delicious, our paratas are a must-try for lovers of
              spicy food.
            </p>
          </div>
          <div className="item">
            <img src={godamba} alt="Godamba Roti" />
            <h3>Godamba Roti</h3>
            <p>
              A traditional Sri Lankan flatbread, perfect to accompany any spicy
              dish.
            </p>
          </div>
          <div className="item">
            <img src={cake} alt="Cake" />
            <h3>Cake</h3>
            <p>
              Our cakes are known for their rich flavor and moist texture,
              perfect for any occasion.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
