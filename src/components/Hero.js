import React from "react";
import styled from "styled-components";

function Hero() {
  const info = {
    name: "¡Hola comunidad Cetaviana!",
    hero: "img/hero.svg",
  };
  return (
    <Background>
      <Wrapper>
        <Flex>
          <Welcome>{info.name}</Welcome>
        </Flex>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  background-color: #ECECEC;
  width: 100%;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 343px;
  @media (min-width: 834px) {
    width: 770px;
  }
  @media (min-width: 1440px) {
    width: 1040px;
  }
`;

const Welcome = styled.p`
  color: #CD552D;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: 1.375rem;
  font-weight: bolder;
  line-height: 60px;

  @media (min-width: 834px) {
    font-size: 2.313rem;
    font-weight: 700;
  }
  @media (min-width: 1440px) {
    font-size: 4.125rem;
  }
`;

const Flex = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 48px 0px 48px;
`;

export { Hero, Wrapper };
