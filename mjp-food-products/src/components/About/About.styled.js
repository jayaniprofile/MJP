import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const AboutStyled = styled.div`
  font-family: "Poppins", sans-serif;
  color: #333;

  .about-banner {
    background: green;
    img {
      width: 100%;
      height: auto;
      animation: fadeIn 2s ease-in-out;
    }
  }

  .mission-vision {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 2.5rem 1.25rem;
    background-color: #fff;
    animation: fadeInUp 2.5s ease-in-out;

    ${breakpoint("md")} {
      flex-direction: row;
    }

    .mission,
    .vision {
      max-width: 25rem;

      h2 {
        font-size: 2rem;
        color: #ff6347; /* Tomato color */
        margin-bottom: 0.625rem;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.6;
      }
    }
  }

  .about-team {
    padding: 2.5rem 1.25rem;
    background-color: #f9f9f9;
    animation: fadeInUp 3s ease-in-out;
    background: url("https://media.istockphoto.com/id/1168280104/vector/white-background-design-with-golden-ribbon-decoration.jpg?s=612x612&w=0&k=20&c=ezCiSbcFOGoLOkwi_pGf6d-r1sf1oCO5--w9nOSuGpc=");
    background-size: cover;
    background-position: center;

    h2 {
      font-size: 2rem;
      color: #ff6347; /* Tomato color */
      margin-bottom: 1.25rem;
    }

    .team-members {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.5rem;

      .team-member {
        max-width: 12.5rem;
        text-align: center;
        animation: fadeIn 3.5s ease-in-out;

        img {
          width: 100%;
          height: auto;
          border-radius: 50%;
          margin-bottom: 0.625rem;
        }

        h3 {
          font-size: 1.2rem;
          margin: 0.625rem 0;
        }
        p {
          font-size: 1rem;
          color: #777;
        }
      }
    }
  }
`;

export const AboutContentStyled = styled.section`
  padding: 1.25rem 0.625rem;
  background-color: #f9f9f9;
  animation: fadeInUp 2s ease-in-out;

  ${breakpoint("md")} {
    padding: 2.5rem 1.25rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #ff6347; /* Tomato color */
    margin-bottom: 1.25rem;
  }
  p {
    font-size: 1.2rem;
    max-width: 50rem;
    margin: 0.625rem auto;
    line-height: 1.6;
  }
`;
