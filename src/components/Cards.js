import React, { useState, useEffect,useContext } from 'react'
import styled from 'styled-components';
import { FilterContext } from '../filterContext';
import {WrapperTags, TogleTags} from './Tags';

function Cards() {
    const [post, setPost] = useState([])
    const [context] = useContext(FilterContext);
    useEffect(() => {
        fetch('https://api.airtable.com/v0/appDz13O7ugHyw4mH/jobs?api_key=keyVGKRZEPpRENeUv')
            .then((response) => response.json())
            .then((res) => {
                if(context === 'Filtrar por tecnico'){
                    setPost(res.records);
                }else{
                    const filteredOptions = res.records.filter((card) => {
                        return card.fields.career[0].includes(context)
                    })
                    if(filteredOptions){
                        setPost(filteredOptions);
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <div>
            {
                post.map(currElement => (
                    <Wrapper key = {currElement.createdTime}>
                        <Jobs src={currElement.fields.logo[0].url}/>
                        <Content>
                            <Title>{currElement.fields.career}</Title>
                            <ContainerText><ContentType>{currElement.fields.description}</ContentType></ContainerText>
                            <WrapperTags><TogleTags>{currElement.fields.type_job}</TogleTags><TogleTags>{currElement.fields.job_level}</TogleTags></WrapperTags>
                        </Content>
                    </Wrapper>
                ))}
        </div>
    )
}

const Wrapper = styled.div`
    border-radius: 10px 0px;
    border: 2px solid #5E5E5E;
    display: flex;
    height: 177px;
    justify-content: space-between;
    margin-top: 200px;
    margin: 22px auto;
    width: 343px; 
    @media(min-width:834px){
        display: flex;
        height: 177px;
        width: 770px;
    }
    @media(min-width:1440px){
        border-radius: 10px 0px;
        border: 2px solid #5E5E5E;
        justify-content: space-between;
        margin-top: 200px;
        margin: 22px auto;
        height: 544px;
        width: 333px;
    }
`
const Content = styled.div`
    align-items: start; 
    display: flex;
    flex-direction: column;
    height: 139px;
    margin-right: 16px;
    width: 187px;
    @media(min-width:834px){
        align-items: start; 
        display: flex;
        flex-direction: column;
        height: 139px;
        margin-right: 24px;
        width: 616px;
    }
    @media(min-width:1440px){
        margin-left: 16px;
        margin-top: 220px;
        position: absolute;
        width: 265px;
    }
`

const ContainerText = styled.div`
    align-items: start; 
    text-align: left;
    width: 185px;
    @media(min-width:834px){
        align-items: start; 
        text-align: left;
        width: 456px;
    }
    @media(min-width:1440px){
        text-align: left;
        width: 318px;
    }  
`

const Title = styled.div`
    color: #5755CC;
    font-size: 11px;
    font-weight: bold;
    margin-top: 8px;
@media(min-width:1440px){
    color: #7C7C7C;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 15px;
    margin-top: 24px;
    text-transform: uppercase;
}
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
    @media(min-width:1440px){
        color: #5E5E5E;
        font-family: Open Sans;
        font-size: 26px;
        font-style: normal;
        font-weight: normal;
        height: 75px;
        left: 0px;
        letter-spacing: 0.005em;
        line-height: 25px;
        width: 290px;
    }
`

const Jobs = styled.img`
    border-radius: 5px;
    float: left;
    height: 100px;
    margin-left: 16px;
    margin-top: 38px;
    width: 100px;
    @media(min-width:834px){
        height: 100px;
        margin-left: 16px;
        margin-top: 38px;
        width: 100px;
    }
    @media(min-width:1440px){
        border-radius: 5px;
        float: left;
        height: 187px;
        margin: 16px 16px;
        width: 300px;
    }
`

export default Cards;