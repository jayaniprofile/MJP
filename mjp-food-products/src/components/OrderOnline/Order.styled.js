import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const OrderOnlineStyled = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5em;
    color: #ff6347; /* Tomato color */
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 10px;
    font-size: 1.1em;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
  }

  fieldset {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  legend {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .item-label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    span {
      flex: 1;
    }

    input[type="number"] {
      width: 60px;
      margin-left: 10px;
    }
  }

  textarea {
    resize: vertical;
    height: 100px;
  }

  h2 {
    text-align: center;
    margin-top: 20px;
    font-size: 1.5em;
  }

  button {
    padding: 15px;
    background-color: #ff6347; /* Tomato color */
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e5533b;
    }
  }
`;
