import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const props = {
    logo:"./img/triada-logo-header.png",
    title:"Bolsa de empleo",
    homelogo:"./img/home.png",
    homename:"Inicio",
    postlogo:"./img/ic_baseline-post-add.png",
    postname:"Publicar Oferta",
    ofertslogo:"./img/card_travel.png",
    ofertsname:"Ofertas Laborales"
  }

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <img src={props.logo} alt="logo CETAV"/>
            <p>{props.title}</p>  
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src={props.homelogo} alt="home page icon link"/>
                <div>
                  {props.homename}
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src={props.postlogo} alt="post ofert page icon link"/>
                <div>
                  {props.postname}
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src={props.ofertslogo} alt="all oferts page icon link"/>
                <div>
                  {props.ofertsname}
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #292929;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

const LogoContainer = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  p {
    &:nth-child(2) {
      border-left: 2px solid white;
      color: #fff;
      padding: 4px;
      width: 143px;
  }
  svg {
    fill: #fff;
    margin-right: 0.5rem;
  }
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    background-color: #292929e5;
    position: absolute;
    top: 100px;
    right: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 375px;
    height: 90vh;
    justify-content: start;
    padding-top: 40px;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

const MenuItem = styled.li`
  height: 100%;
  img{
    display: none;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    img{
      display: block;
      padding-right: 12px;
    }
  }
`;

const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2rem;
  color: #fff;
  font-family: sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    text-decoration: underline;
    transition: 0.5s all ease;
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 90%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 90%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 90%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #fff;
      margin-right: 2rem;
    }
  }
`;