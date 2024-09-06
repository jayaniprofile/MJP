import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const ContactStyled = styled.div`
  font-family: Arial, sans-serif;
  color: #333;

  .contact-banner img {
    width: 100%;
    margin-bottom: 20px;
  }

  .contact-info {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: 2.5em;
      color: #ff6347; /* Tomato color */
    }

    p {
      font-size: 1.2em;
    }
  }

  .contact-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }

  .contact-form,
  .contact-info-details {
    flex: 1;
    min-width: 300px;
    max-width: 45%;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .contact-form h2,
  .contact-info-details h2 {
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
    color: #ff6347; /* Tomato color */
  }

  .contact-form label {
    display: block;
    margin-bottom: 10px;
    font-size: 1.1em;
    color: #555;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #ff6347; /* Tomato color */
    outline: none;
    box-shadow: 0 0 5px rgba(255, 99, 71, 0.5);
  }

  .contact-form textarea {
    height: 100px;
  }

  .contact-form button {
    background: #ff6347; /* Tomato color */
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .contact-form button:hover {
    background: #e5533d;
  }

  .contact-info-details p {
    font-size: 1.1em;
    margin: 10px 0;
  }

  .contact-info-details .social-media {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .contact-info-details .social-media a {
    font-size: 1.5em;
    color: #333;
    transition: color 0.3s;
  }

  .contact-info-details .social-media a:hover {
    color: #ff6347; /* Tomato color */
  }

  .contact-info-details .map {
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden; /* Ensures the map stays within the rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    iframe {
      width: 100%;
      height: 250px;
      border: none;
      border-radius: 10px; /* Rounded corners for the map */
    }
  }
`;
