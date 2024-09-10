import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const ContactStyled = styled.div`
  font-family: Arial, sans-serif;
  color: #333;

  .contact-banner img {
    width: 100%;
    margin-bottom: 1.25rem;
  }

  .contact-info {
    text-align: center;
    margin-bottom: 2.5rem;
    text-decoration: none;

    h1 {
      font-size: 2.5rem;
      color: #ff6347; /* Tomato color */
    }

    p {
      font-size: 1.2rem;
    }
  }

  .contact-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.25rem;
  }

  .contact-form,
  .contact-info-details {
    flex: 1;
    min-width: 18.75rem;
    max-width: 45%;
    background: #fff;
    padding: 1.875rem;
    border-radius: 0.625rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  }

  .contact-form h2,
  .contact-info-details h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    text-align: center;
    color: #ff6347; /* Tomato color */
  }

  .contact-form label {
    display: block;
    margin-bottom: 0.625rem;
    font-size: 1.1rem;
    color: #555;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.625rem;
    margin-bottom: 1.25rem;
    border: 1px solid #ddd;
    border-radius: 0.3125rem;
    font-size: 1rem;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #ff6347; /* Tomato color */
    outline: none;
    box-shadow: 0 0 0.3125rem rgba(255, 99, 71, 0.5);
  }

  .contact-form textarea {
    height: 6.25rem;
  }

  .contact-form button {
    background: #ff6347; /* Tomato color */
    color: #fff;
    border: none;
    padding: 0.625rem 1.25rem;
    font-size: 1.2rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .contact-form button:hover {
    background: #e5533d;
  }

  .contact-info-details p {
    font-size: 1.1rem;
    margin: 0.625rem 0;
  }

  .contact-info-details .social-media {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 1.25rem;
  }

  .contact-info-details .social-media a {
    font-size: 1.5rem;
    color: #333;
    transition: color 0.3s;
  }

  .contact-info-details .social-media a:hover {
    color: #ff6347; /* Tomato color */
  }

  .contact-info-details .map {
    margin-top: 1.25rem;
    border-radius: 0.625rem;
    overflow: hidden; /* Ensures the map stays within the rounded corners */
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

    iframe {
      width: 100%;
      height: 15.625rem;
      border: none;
      border-radius: 0.625rem; /* Rounded corners for the map */
    }
  }
`;
