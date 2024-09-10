import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ff6347; /* Tomato color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }

  .abc {
    width: 100px;
    height: 50px;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      display: inline;
    }

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      padding: 10px 15px;
      transition:
        background-color 0.3s,
        color 0.3s;

      &:hover {
        background-color: white;
        color: #ff6347; /* Tomato color */
        border-radius: 5px;
      }
    }
  }

  /* Responsive styles */

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-links {
      flex-direction: column;
      width: 100%;
      gap: 10px;
    }

    .nav-links li {
      width: 100%;
    }

    .nav-links a {
      width: 100%;
      text-align: center;
      padding: 10px 0;
    }
  }

  @media (max-width: 480px) {
    .header {
      padding: 10px;
    }

    .logo {
      font-size: 1.2em;
    }

    .nav-links {
      gap: 5px;
    }

    .nav-links a {
      padding: 8px 0;
      font-size: 0.9em;
    }
  }
`;
