import React from "react";
import styled from 'styled-components'

const Tags = (props) => {
    return <Wrapper><Togletags>{props.name}</Togletags><Togletags>{props.name}</Togletags></Wrapper>
}

export default Tags;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const Togletags = styled.div`
    align-items: center;
    background: #E1ECF4;
    border-radius: 5px;
    color: #0C4066;
    display: flex;
    font-size: 12px;
    height: 24px;
    justify-content: center;
    margin-left: 8px;
    text-transform: uppercase;
    width: 60px;
`