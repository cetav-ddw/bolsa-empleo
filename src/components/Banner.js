import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Hero";

function Banner() {
  const info = {
    title: "Creando Oportunidades",
    subtitle: "CETAV | Bolsa de empleo",
    banner: "img/banner.svg",
    logo: "img/logo.png",
  };
  return (
    <Wrapper>
      <Background>
        <Flex>
          <div>
            <Title>{info.title}</Title>
            <Subtitle>{info.subtitle}</Subtitle>
          </div>
          <Image src={info.banner} alt="Banner" />
        </Flex>
      </Background>
    </Wrapper>
  );
}

const Flex = styled.div`
  width: 296px;
  margin: 0 auto;
  @media (min-width: 834px) {
    width: 672px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    width: 814px;
  }
`;

const Background = styled.div`
  background: #5755cc;
  width: 100%;
  margin-bottom: 48px;
  border-radius: 5px;
`;
const Title = styled.h2`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1.625rem;
  font-weight: 700;
  padding-top: 52px;
  @media (min-width: 1440px) {
    font-size: 2.313rem;
  }
`;
const Subtitle = styled.h3`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding-top: 24px;
  @media (min-width: 834px) {
    font-size: 1.125rem;
  }
`;
const Image = styled.img`
  width: 80%;
  max-width: 100%;
  height: auto;
  margin: 44px 0px 44px 34px;
  @media (min-width: 834px) {
    width: 36%;
    margin: 60px 0px 60px;
  }
`;

export default Banner;
