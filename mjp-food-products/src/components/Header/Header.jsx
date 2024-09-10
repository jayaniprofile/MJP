import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { HeaderStyled } from "./Header.styled";
import lg from "../../images/LG.png";

function Header() {
  return (
    <HeaderStyled>
      <div className="logo">
        <Link to={"/home"}>
          <img className="abc" src={lg} alt="head" />
        </Link>
      </div>
      <Navigation />
    </HeaderStyled>
  );
}

export default Header;
