import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WorkIcon from "@mui/icons-material/Work";

function Navbar() {
  const info = {
    cetav_link: "https://www.parquelalibertad.org/cetav/home",
    logo: "../img/principal-logo.png",
    home: "Inicio",
    offers: "Ofertas de Empleo",
  };
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <Container>
      <WrapperHeader>
        <WrapperLogo>
          <a href={info.cetav_link} target="_blank" rel="noreferrer">
            <img src={info.logo} alt="Logo Cetav bolsa de empleo"></img>
          </a>
        </WrapperLogo>
        <HeaderNav>
          <Link to="/">Inicio</Link>
          <Link to="/ofertas">Ofertas Laborales</Link>
        </HeaderNav>
        <MenuIcon onClick={() => setMenuStatus(true)} />
      </WrapperHeader>
      <MenuNav show={menuStatus}>
        <Menuwrapper>
          <CloseWrapper>
            <CustomClose onClick={() => setMenuStatus(false)} />
          </CloseWrapper>
          <AnchorsWrapper>
            <Link to="/">
              <HomeRoundedIcon />
              {info.home}
            </Link>
            <Link to="/ofertas">
              <WorkIcon />
              {info.offers}
            </Link>
          </AnchorsWrapper>
        </Menuwrapper>
      </MenuNav>
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
    display: none;
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

const MenuIcon = styled(MenuRoundedIcon)`
  color: white;
  font-size: medium;
  width: 50px;
  @media (min-width: 1440px) {
    display: none;
  }
`;
const Menuwrapper = styled.div`
  margin: 18px auto;
  width: 315px;
`;

const MenuNav = styled.div`
  background: #292929;
  bottom: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 20px;
  position: fixed;
  right: 0;
  text-align: start;
  top: 0;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  width: 100%;
  z-index: 16;
  @media (min-width: 834px) {
    width: 375px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

const AnchorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 57px;
  a {
    align-items: center;
    color: white;
    display: flex;
    font-family: "Poppins";
    font-size: 24px;
    margin-bottom: 24px;
  }
  svg {
    margin-right: 16px;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(ClearRoundedIcon)`
  color: white;
  font-size: large;
`;
export default Navbar;
