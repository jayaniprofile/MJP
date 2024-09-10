import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const MenuStyled = styled.div`
  font-family: "Poppins", sans-serif;
  color: #333;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
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
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .category {
    cursor: pointer;
    text-align: center;
    width: 13.75rem;
    border: 0.063rem solid #ddd; /* Retained as px for precision */
    border-radius: 0.625rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }

    &.selected {
      border: 0.063rem solid #f00; /* Retained as px for precision */
      cursor: default;
    }

    img {
      width: 100%;
      height: 9.375rem;
      object-fit: cover;
    }

    h2 {
      font-size: 1.5rem;
      margin: 0.625rem 0;
      color: #ff6347;
    }
  }

  /* Item styles */
  .items {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1.25rem;
    animation: fadeIn 0.5s ease-in-out;
  }

  .item {
    width: 13.75rem;
    text-align: center;
    border: 0.063rem solid #ddd; /* Retained as px for precision */
    border-radius: 0.625rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    background-color: white;
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 9.375rem;
      object-fit: cover;
    }

    .item-info {
      padding: 0.625rem;

      h3 {
        font-size: 1.2rem;
        margin: 0.625rem 0;
      }

      p {
        font-size: 1rem;
        margin: 0.3125rem 0;
      }

      .price {
        font-weight: bold;
        color: #ff6347; /* Tomato color */
        font-size: 1.2rem;
      }
    }
  }

  /* Animation styles */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(1.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
