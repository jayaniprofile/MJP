import React from "react";
import fb from "../../images/fb.png";
import inster from "../../images/inster.png";
import utube from "../../images/Youtube.png";
import phone from "../../images/tele.png";
import email from "../../images/emaill.png";
import { FooterStyled } from "./Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p className="para">
            <img src={email} alt="email" />{" "}
            <a href="mailto:info@mjsfoodproducts.com">
              mjsfoodproducts@gmail.com
            </a>
          </p>
          <p>
            <img src={phone} alt="phone" />{" "}
            <a href="tel:+1234567890">070 661 6049</a>
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
              <img src={fb} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={inster} alt="Instagram" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={utube} alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>About MJS Food Products</h3>
          <p>
            We provide the finest selection of sweets and pre-made foods crafted
            with the highest quality ingredients. Experience the taste of
            tradition with every bite.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MJS Food Products. All rights reserved.</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
