import React from "react";
import styled from 'styled-components';

function Hero(){
    const info ={
        name: "Bienvenidos",
        hero:"img/hero.svg"
    };
    return(
        <Background>
            <Wrapper>
                <Flex> 
                    <Welcome>{info.name}</Welcome>
                    <Image src={info.hero} alt="hero_muñecos" />
                </Flex>
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
    color:#5E5E5E;
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-size: 1.375rem;
    font-weight: 500;
    @media(min-width:834px){
        font-size: 2.313rem;
        font-weight: 700;
    }
    @media(min-width:1440px){
        font-size: 4.125rem;
    }
`
const Image = styled.img`
    width:50%;
    max-width: 100%;
    height: auto;
`
const Flex = styled.div`
    padding: 48px 0px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export {Hero, Wrapper} ;

