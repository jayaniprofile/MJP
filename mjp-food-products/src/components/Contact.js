import React from "react";
import "../style/Contact.css";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact-banner">
        <img
          src="/path-to-your-contact-banner-image.jpg"
          alt="Contact MJP Food Products"
        />
      </div>
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question about our
          products, feedback, or just want to say hello, feel free to reach out
          to us.
        </p>
      </section>
      <section className="contact-details">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info-details">
          <h2>Get in Touch</h2>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email:</strong> contact@mjpfoodproducts.com
          </p>
          <div className="social-media">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196304993946!2d144.95373631531698!3d-37.81627997975142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577bebae65121ec!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1600413549686!5m2!1sen!2sau"
              width="100%"
              height="250"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
