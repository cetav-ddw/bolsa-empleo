import React, { useState, useEffect,useContext } from 'react'
import styled from 'styled-components';
import { FilterContext } from '../filterContext';


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
                            <WrapperTags><Togletags>{currElement.fields.type_job}</Togletags><Togletags>{currElement.fields.job_level}</Togletags></WrapperTags>
                        </Content>
                    </Wrapper>
                ))}
        </div>
    )
}

const Wrapper = styled.div`
    @media(min-width:1080px){
        border-radius: 10px 0px;
        border: 2px solid #5E5E5E;
        justify-content: space-between;
        margin-top: 200px;
        margin: 22px auto;
        width: 333px;
    }
    @media(max-width:834px){
        border-radius: 10px 0px;
        border: 2px solid #5E5E5E;
        display: flex;
        height: 177px;
        justify-content: space-between;
        margin-top: 200px;
        margin: 22px auto;
        border-radius: 10px 0px;
        border: 2px solid #5E5E5E;
        justify-content: space-between;
        margin-top: 200px;
        margin: 22px auto;
        width: 333px;
    @media(max-width:375px){
        border-radius: 10px 0px;
        border: 2px solid #5E5E5E;
        display: flex;
        height: 177px;
        justify-content: space-between;
        margin-top: 200px;
        margin: 22px auto;
        width: 343px;
    }
`
const Content = styled.div`
    @media(min-width:1080px){
        width: 265px;
    }
    @media(max-width:834px){
        align-items: start; 
        display: flex;
        flex-direction: column;
        height: 139px;
        margin-right: 24px;
        width: 616px;
    }
    @media(max-width:375px){
        align-items: start; 
        display: flex;
        flex-direction: column;
        height: 139px;
        margin-right: 16px;
        width: 187px;
    }
`

const ContainerText = styled.div`
    @media(min-width:1080px){
        text-align: left;
        width: 318px;
    }
    @media(max-width:834px){
        align-items: start; 
        text-align: left;
        width: 456px;
    }
    @media(max-width:375px){
        align-items: start; 
        text-align: left;
        width: 185px;
    }
`

const Title = styled.div`
    @media(min-width:1080px){
        color: #5755CC;
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 15px;
        margin-top: 24px;
        text-transform: uppercase;
    }
    @media(max-width:834px){
        color: #5755CC;
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 15px;
        margin-top: 24px;
        text-transform: uppercase;
    }
    @media(max-width:375px){
        color: #5755CC;
        font-family: Open Sans;
        font-size: 11px;
        font-style: normal;
        font-weight: bold;
        line-height: 15px;
        margin-top: 8px;
        text-transform: uppercase;
    }
`

const ContentType = styled.p`
    @media(min-width:1080px){
        color: #5E5E5E;
        font-family: Open Sans;
        font-size: 26px;
        font-style: normal;
        font-weight: normal;
        height: 75px;
        left: 0px;
        letter-spacing: 0.005em;
        line-height: 25px;
        margin-left: 14px;
        top: 24px;
        width: 340px;
    }
    @media(max-width:834px){
        color: #5E5E5E;
        font-family: Open Sans;
        font-size: 26px;
        font-style: normal;
        font-weight: normal;
        height: 75px;
        left: 0px;
        letter-spacing: 0.005em;
        line-height: 25px;
        top: 24px;
        width: 340px;
    }
    @media(max-width:375px){
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
    }
`
const Togletags = styled.div`
    @media(max-width:375px){
        align-items: center;
        background: #E1ECF4;
        border-radius: 5px;
        color: #0C4066;
        display: flex;
        font-size: 10px;
        height: 24px;
        justify-content: center;
        margin-left: 8px;
        text-transform: uppercase;
        width: 60px;
    }
`

const WrapperTags = styled.div`
    @media(max-width:375px){
        display: flex;
        flex-direction: row;
    }
`

const Jobs = styled.img`
    @media(min-width:1080px){
        border-radius: 5px;
        float: left;
        height: 187px;
        margin: 16px 16px;
        width: 300px;
    }
    @media(max-width:834px){
        border-radius: 5px;
        float: left;
        height: 100px;
        margin-left: 16px;
        margin-top: 38px;
        width: 100px;
    }
    @media(max-width:375px){
        border-radius: 5px;
        float: left;
        height: 100px;
        margin-left: 16px;
        margin-top: 38px;
        width: 100px;
    }
`

export default Cards;