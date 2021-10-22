import React from "react";
import styled from 'styled-components'

const Tags = (props) => {
    return <WrapperTags><TogleTags>{props.name}</TogleTags><TogleTags>{props.name}</TogleTags></WrapperTags>
}

const WrapperTags = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
const TogleTags = styled.div`
    font-family: 'Open Sans', sans-serif;
    align-items: center;
    background: #E1ECF4;
    border-radius: 5px;
    color: #0C4066;
    display: flex;
    font-size: 0.5rem;
    height: 30px;
    justify-content: center;
    margin-left: 8px;
    text-transform: uppercase;
    width: 100px;
    text-align: center;
    font-weight: 700;
`

export {WrapperTags, TogleTags, Tags}