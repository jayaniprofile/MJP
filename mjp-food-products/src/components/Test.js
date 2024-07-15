import React from "react";
import "./test.css";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src="/path-to-your-banner-image.jpg" alt="Delicious Food Banner" />
        <div className="banner-text">
          <h1>MJP Food Products</h1>
          <p>Delicious and Authentic Sri Lankan Cuisine</p>
          <button>Explore Menu</button>
        </div>
      </div>
      <section className="introduction">
        <h1>Welcome to MJP Food Products</h1>
        <p>
          At MJP Food Products, we are dedicated to bringing you the finest
          selection of delicious sweets and spicy dishes. Our offerings are
          crafted with the highest quality ingredients to ensure a delightful
          culinary experience.
        </p>
      </section>
      <section className="featured-items">
        <h2>Featured Items</h2>
        <div className="items">
          <div className="item">
            <img src="/path-to-kottu-image.jpg" alt="Kottu" />
            <h3>Kottu</h3>
            <p>
              A popular Sri Lankan dish made with chopped flatbread, vegetables,
              and spices.
            </p>
          </div>
          <div className="item">
            <img src="/path-to-cake-image.jpg" alt="Cake" />
            <h3>Cake</h3>
            <p>
              Our cakes are known for their rich flavor and moist texture,
              perfect for any occasion.
            </p>
          </div>
          <div className="item">
            <img src="/path-to-parata-image.jpg" alt="Parata" />
            <h3>Parata</h3>
            <p>
              Flaky and delicious, our paratas are a must-try for lovers of
              spicy food.
            </p>
          </div>
          <div className="item">
            <img src="/path-to-roti-image.jpg" alt="Gothamba Roti" />
            <h3>Gothamba Roti</h3>
            <p>
              A traditional Sri Lankan flatbread, perfect to accompany any spicy
              dish.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
