import React from "react";
import "../style/About.css";

function About() {
  return (
    <div className="about">
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
      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/path-to-team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/path-to-team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head Chef</p>
          </div>
          // Add more team members as needed
        </div>
      </section>
    </div>
  );
}

export default About;
