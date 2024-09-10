import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const OrderOnlineStyled = styled.div`
  font-family: Arial, sans-serif;
  max-width: 50rem; /* 800px */
  margin: 0 auto;
  padding: 1.25rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 1.25rem;
    font-size: 2.5rem;
    color: #ff6347; /* Tomato color */
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.625rem;
    font-size: 1.1rem;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  select,
  textarea {
    width: 100%;
    padding: 0.625rem;
    margin-top: 0.3125rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.25rem;
    font-size: 1rem;
  }

  fieldset {
    margin-bottom: 0.9375rem;
    padding: 0.625rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.25rem;
  }

  legend {
    font-size: 1.2rem;
    margin-bottom: 0.625rem;
  }

  .item-label {
    display: flex;
    align-items: center;
    margin-bottom: 0.625rem;

    span {
      flex: 1;
    }

    input[type="number"] {
      width: 3.75rem;
      margin-left: 0.625rem;
    }
  }

  textarea {
    resize: vertical;
    height: 6.25rem;
  }

  h2 {
    text-align: center;
    margin-top: 1.25rem;
    font-size: 1.5rem;
  }

  button {
    padding: 0.9375rem;
    background-color: #ff6347; /* Tomato color */
    color: white;
    border: none;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e5533b;
    }
  }
`;
