import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@mjpfoodproducts.com">
              info@mjpfoodproducts.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-facebook-icon.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-instagram-icon.png" alt="Instagram" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/path-to-youtube-icon.png" alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>About MJP Food Products</h3>
          <p>
            We provide the finest selection of sweets and pre-made foods crafted
            with the highest quality ingredients. Experience the taste of
            tradition with every bite.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MJP Food Products. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
