import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const HomeStyled = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #333;

  .banner img {
    width: 100%;
    height: auto;
    max-height: 600px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: slideIn 1s ease-in-out;
  }

  .introduction {
    padding: 20px;
    background-color: #f9f9f9;
    margin-top: 20px;
    border-top: 5px solid #ff6347; /* Tomato color */
    animation: fadeIn 1s ease-in-out;

    h1 {
      font-size: 2.5em;
      color: #ff6347; /* Tomato color */
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2em;
      margin: 0 auto;
      max-width: 800px;
      color: #666;
    }
  }

  .featured-items {
    padding: 20px;
    margin-top: 40px;

    h2 {
      font-size: 2em;
      color: #ff6347; /* Tomato color */
      margin-bottom: 20px;
      animation: fadeIn 1s ease-in-out;
    }
  }

  .items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    animation: fadeInUp 1s ease-in-out;
  }

  .item {
    margin: 10px;
    width: 220px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    h3 {
      font-size: 1.5em;
      margin: 10px 0;
      color: #ff6347; /* Tomato color */
    }

    p {
      padding: 0 10px 10px 10px;
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
