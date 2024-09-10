import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background-color: #ff6347; /* Tomato color */
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  .abc {
    width: 6.25rem;
    height: 3.125rem;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.25rem;

    li {
      display: inline;
    }

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      padding: 0.625rem 0.9375rem;
      transition:
        background-color 0.3s,
        color 0.3s;

      &:hover {
        background-color: white;
        color: #ff6347; /* Tomato color */
        border-radius: 0.3125rem;
      }
    }
  }

  /* Responsive styles */

  @media (max-width: 48rem) {
    /* 768px in rem */
    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-links {
      flex-direction: column;
      width: 100%;
      gap: 0.625rem;
    }

    .nav-links li {
      width: 100%;
    }

    .nav-links a {
      width: 100%;
      text-align: center;
      padding: 0.625rem 0;
    }
  }

  @media (max-width: 30rem) {
    /* 480px in rem */
    .header {
      padding: 0.625rem;
    }

    .logo {
      font-size: 1.2rem;
    }

    .nav-links {
      gap: 0.3125rem;
    }

    .nav-links a {
      padding: 0.5rem 0;
      font-size: 0.9rem;
    }
  }
`;
