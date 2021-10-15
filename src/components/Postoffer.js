import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PostOffer() {
    return (
        <WrapperPost>
            <ButtonWrapper>
                <AnchorWrapper>
                    <AnchorPostOffer>
                        <a href="#">Publicar Oferta Laboral</a>
                    </AnchorPostOffer>
                    <ArrowIcon />
                </AnchorWrapper>
            </ButtonWrapper>
        </WrapperPost>
    )
}

export default PostOffer

const WrapperPost = styled.div`

`

const ButtonWrapper = styled.div`
    width: 343px;
    margin: 0 auto;
    display: flex;

    @media (min-width: 834px) {
        width: 770px;
    }

    @media (min-width: 1440px) {
        display: none;
    }
`

const AnchorPostOffer = styled.div`
    
`

const ArrowIcon = styled(ArrowForwardIosIcon)`
    color: #ffffff;
`

const AnchorWrapper = styled.div`
    padding: 18px 16px;
    background-color: #5755CC;
    border-radius: 5px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a{
        color: #ffffff;
        text-decoration: none;
        font-weight: medium;
        font-size: 22px;
    }

    @media (min-width: 834px) {
        width: 100%;
    }
`