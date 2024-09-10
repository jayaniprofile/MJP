import React from "react";
import { FooterStyled } from "./Footer.styled";
import { ContactDetails } from "../../common/ContactDetails";
import { SocialMediaLinks } from "../../common/ContactDetails";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ContactDetails />
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <SocialMediaLinks />
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
