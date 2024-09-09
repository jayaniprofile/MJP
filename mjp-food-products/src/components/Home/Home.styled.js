import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const HomeStyled = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #333;

  .banner img {
    width: 100%;
    height: auto;
    max-height: 37.5 rem;
    object-fit: cover;
    border-radius: 0.625 rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    animation: slideIn 1s ease-in-out;
  }

  .introduction {
    padding: 1.25rem;
    background-color: #f9f9f9;
    margin-top: 1.25rem;
    border-top: 0.313rem solid #ff6347; /* Tomato color */
    animation: fadeIn 1s ease-in-out;

    h1 {
      font-size: 2.5em;
      color: #ff6347; /* Tomato color */
      margin-bottom: 0.625rem;
    }

    p {
      font-size: 1.2em;
      margin: 0 auto;
      max-width: 800px;
      color: #666;
    }
  }

  .featured-items {
    padding: 1.25rem;
    margin-top: 2.5rem;

    h2 {
      font-size: 2em;
      color: #ff6347; /* Tomato color */
      margin-bottom: 1.25rem;
      animation: fadeIn 1s ease-in-out;
    }
  }

  .items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.25rem;
    animation: fadeInUp 1s ease-in-out;
  }

  .item {
    margin: 0.625rem;
    width: 13.75rem;
    border: 1px solid #ddd;
    border-radius: 0.625rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    img {
      width: 100%;
      height: 9.375rem;
      object-fit: cover;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }
    h3 {
      font-size: 1.5em;
      margin: 10px 0;
      color: #ff6347; /* Tomato color */
    }

    p {
      padding: 0 0.625rem 0.625rem 0.625rem;
      font-size: 1em;
      color: #666;
    }
  }

  /* Animation styles */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
