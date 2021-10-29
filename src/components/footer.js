import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Backrogund>
      <Container>
        <Content>
          <SecondaryLogo src="../img/triada-logo.png" />
          <FooterOptions>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/ofertas">Ofertas Laborales</Link>
              </li>
            </ul>
          </FooterOptions>
          <FooterLogo>
            <a href="https://www.facebook.com/cetavcr" rel="noreferrer" target="_blank">
              <img src="../img/facebook-logo.svg" alt="Facebook Logo"></img>
            </a>
            <p>© CETAV Bolsa de empleos | 2021</p>
          </FooterLogo>
        </Content>
      </Container>
    </Backrogund>
  );
}

export default Footer;

const Backrogund = styled.div`
  width: 100%;
  background: #292929;
  height: auto;
`;

const Container = styled.div`
  margin: 0 1rem;
  @media (min-width: 834px) {
    margin: 0 2rem;
  }
  @media (min-width: 1040px) {
    margin: 0 8.5rem;
  }
  @media (min-width: 1440px) {
    margin: 0 12.5rem;
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem 0;
  @media (min-width: 1440px) {
    width: 1040px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SecondaryLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

const FooterOptions = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  width: 100%;
  ul {
    list-style: none;
    margin-bottom: 24px;
  }
  li {
    border-bottom: 1px solid #ececec;
    padding: 16px 0px;
    a {
      color: #fff;
      font-family: "Open Sans", sans-serif;
      font-size: 1rem;
      font-weight: 500;
    }
  }

  img {
    margin: 0 auto;
    width: 45px;
    height: 45px;
  }
  p {
    margin-top: 24px;
  }
  @media (min-width: 1040px) {
    width: 18%;
    ul {
      margin-bottom: unset;
    }
    li {
      border-bottom: none;
      text-align: left;
      &:last-of-type {
        margin-bottom: unset;
      }
    }
  }
`;
const FooterLogo = styled.div`
  p {
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }
  img {
    margin-bottom: 24px;
  }
  @media (min-width: 1040px) {
    img {
      margin-bottom: 16px;
    }
  }
`;
