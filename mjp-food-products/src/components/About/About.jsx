import React from "react";
import ceo from "../../images/ayya.jpg";
import ceo1 from "../../images/ayya1.png";
import banner from "../../images/aboutBanner.png";
import {AboutContentStyled, AboutStyled} from "./About.styled";

function About() {
  return (
    <AboutStyled>
      <div className="about-banner">
        <img src={banner} alt="About MJS Food Products" />
      </div>
      <AboutContentStyled>
        <h1>Insight of MJS Food Products</h1>
        <p>
          MJS Food Products was established with a passion for providing
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
      </AboutContentStyled>
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
        <h2>Our Lead</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={ceo} alt="Team Member 1" />
            <h3>Madushan Nishshanka</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
      </section>
    </AboutStyled>
  );
}

export default About;
