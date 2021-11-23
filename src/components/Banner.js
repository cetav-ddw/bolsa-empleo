import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Hero";

function Banner() {
  const info = {
    title: "Creando oportunidades",
    subtitle: "SOY CETAV | Bolsa de empleo",
    newOffer: "Si tenés una oferta laboral, podés compartirla a este correo: ",
    email: "lpacheco@parquelalibertad.org",
    banner: "img/banner.svg",
    logo: "img/logo.png",
  };
  return (
    <Wrapper>
      <Background>
        <Flex>
          <BannerInfo>
            <Title>{info.title}</Title>
            <Subtitle>{info.subtitle}</Subtitle>
            <p>
              {info.newOffer}
              <strong>{info.email}</strong>
            </p>
          </BannerInfo>
          <Image src={info.banner} alt="Banner" />
        </Flex>
      </Background>
    </Wrapper>
  );
}

const Flex = styled.div`
  margin: 0 auto;
  width: 296px;
  @media (min-width: 834px) {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 672px;
  }
  @media (min-width: 1440px) {
    width: 814px;
  }
`;

const Background = styled.div`
  background: #2e2e2e;
  border-radius: 10px;
  margin-bottom: 48px;
  width: 100%;
`;
const Title = styled.h2`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1.525rem;
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
const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  p {
    color: #ffff;
    font-size: 16px;
    margin-top: 40px;

    @media (min-width: 834px) {
      margin-top: 90px;
    }
    @media (min-width: 1440px) {
      margin-top: 115px;
    }
  }
  @media (min-width: 834px) {
    width: 350px;
  }
  @media (min-width: 1440px) {
    width: 440px;
  }
`;
const Image = styled.img`
  height: auto;
  margin: 44px 0px 44px 34px;
  max-width: 100%;
  width: 80%;
  @media (min-width: 834px) {
    margin: 60px 0px 60px;
    width: 36%;
  }
`;

export default Banner;
