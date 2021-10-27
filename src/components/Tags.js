import React from "react";
import styled from 'styled-components'

const Tags = (props) => {
    return (
        <WrapperTags>
            <TogleTags>{props.name}</TogleTags>
        </WrapperTags>
    )
}

const WrapperTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    //justify-content: space-between;
    width: 100%;

    @media(min-width:1440px){
        margin-bottom: 16px;
    }
`
const TogleTags = styled.div`
    font-family: 'Open Sans', sans-serif;
    align-items: center;
    background: #E1ECF4;
    border-radius: 5px;
    color: #0C4066;
    display: flex;
    font-size: 0.5rem;
    height: 28px;
    justify-content: center;
    text-transform: uppercase;
    width: 94px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 8px;
    margin-right: 3px;
`

export {WrapperTags, TogleTags, Tags}