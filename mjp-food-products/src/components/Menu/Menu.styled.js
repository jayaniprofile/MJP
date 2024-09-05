import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const MenuStyled = styled.div`
  font-family: "Poppins", sans-serif;
  color: #333;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #ff6347;
    text-align: center;
  }

  .menu-banner {
    background: green;

    img {
      width: 100%;
      height: auto;
      animation: fadeIn 2s ease-in-out;
    }
  }

  .categories {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .category {
    cursor: pointer;
    text-align: center;
    width: 220px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &.selected {
      border: 1px solid #f00;
      cursor: default;
    }

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    h2 {
      font-size: 1.5em;
      margin: 10px 0;
      color: #ff6347;
    }
  }

  /* Item styles */
  .items {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    animation: fadeIn 0.5s ease-in-out;
  }

  .item {
    width: 220px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    .item-info {
      padding: 10px;

      h3 {
        font-size: 1.2em;
        margin: 10px 0;
      }

      p {
        font-size: 1em;
        margin: 5px 0;
      }

      .price {
        font-weight: bold;
        color: #ff6347; /* Tomato color */
        font-size: 1.2em;
      }
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
`;
