import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const FooterStyled = styled.div`
  background-color: #333;
  color: white;
  padding: 40px 0;
  text-align: center;
  font-family: "Poppins", sans-serif;

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .footer-section {
    max-width: 300px;
    margin: 20px 0;

    h3 {
      color: #ff6347; /* Tomato color */
      margin-bottom: 10px;
    }

    p,
    a {
      color: white;
      text-decoration: none;
      margin: 5px 0;
    }

    a:hover {
      color: #ff6347; /* Tomato color */
    }
  }

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    a {
      margin: 0 10px;
      display: inline-block;
    }

    img {
      width: 30px;
      height: 30px;
      transition:
        transform 0.3s,
        filter 0.3s;

      &:hover {
        transform: scale(1.2);
        filter: brightness(0.8);
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid #555;
    padding-top: 10px;

    p {
      margin: 0;
      font-size: 0.9em;
    }
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }

    .footer-section {
      width: 90%;
    }
  }

  .para {
    text-align: left;
  }
`;
