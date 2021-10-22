import React from "react";
import styled from 'styled-components';
import { Wrapper } from "./Hero";


function Banner(){
    const info ={
        title:"Creando Oportunidades",
        subtitle:"CETAV | Bolsa de empleo",
        banner:"img/banner.svg",
        logo:"img/logo.png"
    }
    return(
        <Wrapper>
            <Background>
                <Flex>
                    <Paragraphs>
                        <Title>{info.title}</Title>
                        <Subtitle>{info.subtitle}</Subtitle>
                    </Paragraphs>
                    <Container>
                        <Image src={info.banner} alt="Banner" />
                    </Container>
                </Flex>
            </Background>
        </Wrapper>
    );
}

const Flex = styled.div`
    @media(min-width:834px){
        display: flex;
        justify-content: space-between;
    }

`

const Background = styled.div`
    background: #5755CC;
    width:100%;
    margin-bottom: 48px;

`
const Title = styled.h2`
    color:#fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.625rem;
    font-weight: 600;
    padding-left:24px;
    padding-top:52px;
    @media(min-width:834px){
        font-size: 2.313rem;
    }
`
const Subtitle = styled.h3`
    color:#fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    padding-left:24px;
    padding-top:24px;
    @media(min-width:834px){
        font-size: 1.125rem;
    }
`
const Container = styled.div`
    width: 100%;
    padding-top:48px;
    
`
const Image = styled.img`
    width: 100%;
    
`
const Paragraphs = styled.div`
    @media(min-width:834px){
        padding-right: 112px;
    }
    @media(min-width:1440px){
        padding-right: 150px;
    }
`

export default Banner;