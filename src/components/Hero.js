import React from "react";
import styled, { StyledComponent } from 'styled-components';




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
                    <Container>
                        <Image src={info.hero} alt="hero_muñecos" />
                    </Container>
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
    color:#292929;
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-size: 1.375rem;
    font-weight: 500;
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
    padding-left: 175px;
    padding-top: 45px;
    @media(min-width:834px){
        padding-left: 388px;
    }
    @media(min-width:1440px){
        padding-left: 527px;
    }
`
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export {Hero, Wrapper} ;

