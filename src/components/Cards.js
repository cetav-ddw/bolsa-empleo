import React from 'react';
import styled from 'styled-components';
import Tags from './Tags';

const Cards = (props) => {
    return (
        <Wrapper>
            <Jobs src="img/jobs.png" />
            <Content>
                <Title>{props.name}</Title>
                <ContainerText><ContentType>7 Skills of Highly Effective Programmers</ContentType></ContainerText>
                <Tags name="Html"></Tags>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-radius: 10px 0px;
    border: 2px solid #5E5E5E;
    display: flex;
    height: 177px;
    justify-content: space-between;
    margin-top: 200px;
    margin: 0 auto;
    width: 343px;
`
const Content = styled.div`
    align-items: start; 
    display: flex;
    flex-direction: column;
    height: 139px;
    margin-right: 16px;
    width: 187px;
`

const ContainerText = styled.div`
    align-items: start; 
    text-align: left;
    width: 185px;
`

const Title = styled.div`
    color: #5E5E5E;
    font-family: Open Sans;
    font-size: 11px;
    font-style: normal;
    font-weight: bold;
    line-height: 15px;
    margin-top: 8px;
    text-transform: uppercase;
`

const ContentType = styled.p`
    color: #292929;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    height: 75px;
    left: 0px;
    letter-spacing: 0.005em;
    line-height: 25px;
    top: 24px;
    width: 185px;
    
`
const Jobs = styled.img`
    border-radius: 5px;
    float: left;
    height: 100px;
    margin-left: 16px;
    margin-top: 38px;
    width: 100px;
`
export default Cards;