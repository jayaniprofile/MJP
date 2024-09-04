import styled from "styled-components";
import {breakpoint} from "../../utils/breakpoints";

export const AboutStyled = styled.div`
    font-family: 'Poppins', sans-serif;
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
        gap: 40px;
        padding: 40px 20px;
        background-color: #fff;
        animation: fadeInUp 2.5s ease-in-out;
        
        ${breakpoint('md')} {
            flex-direction: row;
        }

        .mission, .vision {
            max-width: 400px;
            
            h2{
                font-size: 2em;
                color: #ff6347; /* Tomato color */
                margin-bottom: 10px;
            }

            p {
                font-size: 1.2em;
                line-height: 1.6;
            }
        }
    }

    .about-team {
        padding: 40px 20px;
        background-color: #f9f9f9;
        animation: fadeInUp 3s ease-in-out;
        background:
                url("https://media.istockphoto.com/id/1168280104/vector/white-background-design-with-golden-ribbon-decoration.jpg?s=612x612&w=0&k=20&c=ezCiSbcFOGoLOkwi_pGf6d-r1sf1oCO5--w9nOSuGpc=");
        background-size: cover;
        background-position: center;

        h2 {
            font-size: 2em;
            color: #ff6347; /* Tomato color */
            margin-bottom: 20px;
        }

        .team-members {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;

            .team-member {
                max-width: 200px;
                text-align: center;
                animation: fadeIn 3.5s ease-in-out;

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 50%;
                    margin-bottom: 10px;
                }

                h3 {
                    font-size: 1.2em;
                    margin: 10px 0;
                }
                p {
                    font-size: 1em;
                    color: #777;
                }
            }
        }
    }
    
`;

export const AboutContentStyled = styled.section`
    padding: 20px 10px;
    background-color: #f9f9f9;
    animation: fadeInUp 2s ease-in-out;
    
    ${breakpoint('md')}{
        padding: 40px 20px;
    }

    h1 {
        font-size: 2.5em;
        color: #ff6347; /* Tomato color */
        margin-bottom: 20px;
    }
    p {
        font-size: 1.2em;
        max-width: 800px;
        margin: 10px auto;
        line-height: 1.6;
    }
`