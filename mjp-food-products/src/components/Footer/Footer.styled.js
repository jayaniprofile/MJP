import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const FooterStyled = styled.div`
  background-color: #333;
  color: white;
  padding: 2.5rem 0;
  text-align: center;
  font-family: "Poppins", sans-serif;

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 1.25rem;
  }

  .footer-section {
    max-width: 18.75rem;
    margin: 1.25rem 0;

    h3 {
      color: #ff6347; /* Tomato color */
      margin-bottom: 0.625rem;
    }

    p,
    a {
      color: white;
      text-decoration: none;
      margin: 0.3125rem 0;
    }

    a:hover {
      color: #ff6347; /* Tomato color */
    }
  }

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9375rem;

    a {
      margin: 0 0.625rem;
      display: inline-block;
    }

    img {
      width: 1.875rem;
      height: 1.875rem;
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
    border-top: 0.0625rem solid #555;
    padding-top: 0.625rem;

    p {
      margin: 0;
      font-size: 0.9rem;
    }
  }

  /* Responsive styles */
  @media (max-width: 48rem) {
    /* 768px in rem */
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
