import React from "react";
import { contactInfo } from "./content";
import styled from "styled-components";

const ContactDetailsStyled = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }
`;
export const ContactDetails = () => (
  <ContactDetailsStyled>
    <p>
      <strong>Phone:</strong>{" "}
      <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
    </p>
    <p>
      <strong>Email:</strong>{" "}
      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
    </p>
  </ContactDetailsStyled>
);

export const SocialMediaLinks = () => (
  <div className="social-links">
    {contactInfo.socialMedia.map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={social.image} alt={social.platform} />
      </a>
    ))}
  </div>
);
