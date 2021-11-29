import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar({page}) {
  const info = {
    cetav_link: "https://www.parquelalibertad.org/cetav/home",
    logo: "../img/principal-logo.png",  
  };

  return (
    <Container>
      <WrapperHeader>
        <WrapperLogo>
          <a href={info.cetav_link} target="_blank" rel="noreferrer">
            <img src={info.logo} alt="Logo Cetav bolsa de empleo"></img>
          </a>
        </WrapperLogo>
        <HeaderNav>
          <Link to="/">{page}</Link>
        </HeaderNav>
      </WrapperHeader>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  background-color: #292929;
  display: flex;
  height: 100px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`;
const WrapperHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 343px;
  svg {
    display: none;
  }
  @media (min-width: 834px) {
    width: 770px;
  }
  @media (min-width: 1440px) {
    width: 1040px;
    svg {
      display: none;
    }
  }
`;

const WrapperLogo = styled.div`
  width: 200px;
  img {
    width: 100%;
  }
`;

const HeaderNav = styled.div`
  display: flex;
  a {
    color: white;
    //display: none;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: bolder;
    margin-left: 40px;
  }
  a::after {
    background-color: white;
    content: "";
    display: block;
    height: 2px;
    transition: width 0.3s;
    width: 0;
  }
  a:hover::after {
    transition: width 0.3s;
    width: 100%;
  }
  @media (min-width: 1440px) {
    a {
      display: block;
    }
  }
`;


export default Navbar;
