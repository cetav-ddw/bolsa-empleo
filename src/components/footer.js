import React from 'react';
import styled from 'styled-components';

function Footer (){
    return(
        <Backrogund>
            <Container>
                <Content>
                    <SecondaryLogo src="img/triada-logo.png"/>
                    <FooterOptions>
                        <ul>
                            <li><a href ="#" aria-label="Pagina principal">Inicio</a></li>
                            <li><a href ="#" aria-label="Ofertas de empleo disponibles">Ofertas Laborales</a></li>
                            <li><a href ="#" aria-label="Publicar oferta de empleo ">Publicar Oferta Laboral</a></li>
                        </ul>
                    </FooterOptions>
                    <FooterLogo>
                        <a href ="#"><img src="img/facebook-logo.svg" alt="Facebook Logo"></img></a>
                        <p>© CETAV Bolsa de empleos | 2021</p>
                    </FooterLogo>
                </Content>
            </Container>
        </Backrogund>
    )
}

export default Footer

const Backrogund = styled.div`
    width:100%;
    background: #292929;
    height: auto;
`

const Container = styled.div`
    margin: 0 1rem;
    @media(min-width:834px){
        margin: 0 2rem;
    }
    @media(min-width:1040px){
        margin: 0 8.5rem;
    }
    @media(min-width:1440px){
        margin: 0 12.5rem;
    }
`

const Content = styled.div`
    align-items:center;
    display: flex;
    flex-direction: column;
    text-align:center;
    @media(min-width:1040px){
        flex-direction: row;
        justify-content: space-between;
    }
`

const SecondaryLogo = styled.img`
    max-width: 100%;
    height: auto;
`

const FooterOptions = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    width:100%;
    ul{
        list-style:none;
        margin-bottom : 24px;
    }
    li{
        border-bottom: 1px solid #ECECEC;
        padding: 16px 0px;
        a{
            color:white;
        }
    }

    img{
        margin: 0 auto;
        width:45px;
        height:45px;
    }
    p{
        margin-top : 24px;
    }
    @media(min-width:1040px){
        width:25%;
        li{
            border-bottom:none;
            text-align:left;
            &:last-of-type{
                margin-bottom : unset;
            }
        }
    }
`
const FooterLogo = styled.div`
    p{
        color:white;
    }
    img{
        margin-bottom : 24px;
    }
    @media(min-width:1040px){
        img{
            margin-bottom: 16px;
        }
    }
`