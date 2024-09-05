import React from "react";
import banner from "../../images/home1.png";
import { HomeStyled } from "./Home.styled";
import { homeItems } from "../../common/content";

function Home() {
  const FeaturedItem = ({ img, name, description }) => (
    <div className="item">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
  return (
    <HomeStyled>
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
          {homeItems.map((item) => (
            <FeaturedItem
              key={item.name}
              img={item.img}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </HomeStyled>
  );
}

export default Home;
