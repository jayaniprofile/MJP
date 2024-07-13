import React from "react";
import "../style/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <section className="category sweets">
        <h2>Sweets</h2>
        <div className="items">
          <div className="item">
            <img src="/path-to-cake-image.jpg" alt="Cake" />
            <div className="item-info">
              <h3>Cake</h3>
              <p>Rich and moist cake, perfect for any occasion.</p>
              <p className="price">$10.00</p>
            </div>
          </div>
          {/* Add more sweet items here */}
        </div>
      </section>
      <section className="category spicy">
        <h2>Spicy</h2>
        <div className="items">
          <div className="item">
            <img src="/path-to-kottu-image.jpg" alt="Kottu" />
            <div className="item-info">
              <h3>Kottu</h3>
              <p>
                A popular Sri Lankan dish made with chopped flatbread,
                vegetables, and spices.
              </p>
              <p className="price">$8.00</p>
            </div>
          </div>
          <div className="item">
            <img src="/path-to-parata-image.jpg" alt="Parata" />
            <div className="item-info">
              <h3>Parata</h3>
              <p>
                Flaky and delicious, our paratas are a must-try for lovers of
                spicy food.
              </p>
              <p className="price">$5.00</p>
            </div>
          </div>
          <div className="item">
            <img src="/path-to-roti-image.jpg" alt="Gothamba Roti" />
            <div className="item-info">
              <h3>Gothamba Roti</h3>
              <p>
                A traditional Sri Lankan flatbread, perfect to accompany any
                spicy dish.
              </p>
              <p className="price">$4.00</p>
            </div>
          </div>
          {/* Add more spicy items here */}
        </div>
      </section>
    </div>
  );
}

export default Menu;
