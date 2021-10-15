import React from "react";
import styled, { StyledComponent } from 'styled-components';
import { Wrapper } from "./Hero";
import banner from "../img/banner.svg";
import logo from "../img/logo.png";

function Banner(props){
    return(
        <Background>
            <Wrapper>
                <Flex>
                    <Paragraphs>
                        <Title>{props.title}</Title>
                        <Subtitle>{props.subtitle}</Subtitle>
                    </Paragraphs>
                    <Container>
                        <Image src={banner} alt="Banner" />
                    </Container>
                </Flex>
                <Logo src={logo} alt="Logo del cetav" />
            </Wrapper>
        </Background>
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
const Logo = styled.img`
    width: 100%;
    padding-top:48px;
    @media(min-width:834px){
        width: 30%;
        padding-top:0;
    }
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