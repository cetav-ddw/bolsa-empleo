import React from "react";
import styled, { StyledComponent } from 'styled-components';
import hero from '../img/hero.svg'

function Hero(props){
    return(
        <Background>
            <Wrapper>
                <Welcome>{props.name}</Welcome>
                <Container>
                    <Image src={hero} alt="hero_muñecos" />
                </Container>
            </Wrapper>
        </Background>
    )

}





const Background = styled.div`
    background-color: #E1ECF4;
    width:100%;
`

const Wrapper = styled.div`
    width: 91.5%;
    margin: 0 auto;
    @media(min-width:834px){
        width:92%;
    }
    @media(min-width:1440px){
        width:72%;
    }

`

const Welcome = styled.p`
    color:#292929;
    margin: 0;
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-size: 1.375rem;
    font-weight: 500;
    padding-top:40px;
    position:absolute;
    z-index: 1;
    @media(min-width:834px){
        font-size: 1.625rem;
    }
    @media(min-width:1440px){
        font-size: 2.313rem;
    }
`
const Image = styled.img`
    width: 100%;
`
const Container = styled.div`
    width:100%;
    padding-left: 99px;
    padding-top: 45px;
    @media(min-width:834px){
        padding-left: 233px;
    }
    @media(min-width:1440px){
        padding-left: 310px;
    }
`
export {Hero, Wrapper} ;

