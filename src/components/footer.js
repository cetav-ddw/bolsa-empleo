import React from 'react';
import styled from 'styled-components';

function footer (){
    return(
        <Backrogund>
            <Container>
                <Content>
                    <SecondaryLogo src="img/logo-triada.png"/>
                    <FooterOptions>
                        <a href ="#">Inicio</a>
                        <a href ="#">Puestos Disponibles</a>
                        <a href ="#">Publicar Puesto</a>
                        <img src="img/facebook-logo.png"></img>
                        <p>© CETAV Empleos | 2021</p>
                    </FooterOptions>
                </Content>
            </Container>
        </Backrogund>
    )
}

export default footer

const Backrogund = styled.div`
    width:100%;
    background: black;
    height: auto;
`

const Container = styled.div`
    width: 365px;
    margin: 0 auto;
`

const Content = styled.div`
    align-items:center;
    display: flex;
    flex-direction: column;
    text-align-center
`

const SecondaryLogo = styled.img`
    max-width: 100%;
    height: auto;
`

const FooterOptions = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    a{
        border-bottom: 1px solid #ECECEC;
        padding: 16px 0px;
    }
    a:nth-child(3){
        margin-bottom : 24px;
    }
    img{
        margin: 0 auto;
        width:45px;
        height:45px;
    }
    p{
        margin-top : 24px;
    }
`