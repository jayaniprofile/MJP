import React from "react";
import "../style/About.css";
import Footer from "./Footer";
import Header from "./Header";
import ceo from "../images/ayya.jpg";

function About() {
  return (
    <div className="about">
      <Header />
      <div className="about-banner">
        <img
          src="/path-to-your-about-banner-image.jpg"
          alt="About MJP Food Products"
        />
      </div>
      <section className="about-content">
        <h1>About MJP Food Products</h1>
        <p>
          MJP Food Products was established with a passion for providing
          high-quality, delicious food to our community. Our mission is to bring
          joy to our customers through our carefully crafted sweets and pre-made
          foods.
        </p>
        <p>
          We take pride in using only the finest ingredients to ensure that
          every bite is a delightful experience. From our famous kottu to our
          mouth-watering cakes, each item is prepared with love and dedication.
        </p>
        <p>
          Our journey started in a small kitchen, and today, we have grown into
          a beloved brand known for our commitment to quality and customer
          satisfaction. We look forward to continuing to serve you with our
          exceptional food offerings.
        </p>
      </section>
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To deliver the finest selection of delicious sweets and pre-made
            foods, crafted with the highest quality ingredients to ensure a
            delightful culinary experience for our customers.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be the leading provider of exceptional food products, known for
            our commitment to quality, customer satisfaction, and the
            celebration of traditional flavors.
          </p>
        </div>
      </section>
      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={ceo} alt="Team Member 1" />
            <h3>Madushan Nishshanka</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
