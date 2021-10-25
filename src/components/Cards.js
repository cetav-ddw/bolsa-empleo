import React, { useState, useEffect,useContext } from 'react'
import styled from 'styled-components';
import { FilterContext } from '../filterContext';
import {WrapperTags, TogleTags} from './Tags';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
            <PrincipalTitle>Ofertas de empleo</PrincipalTitle>
            {
                post.map(currElement => (
                    <Container>
                        <Wrapper key = {currElement.createdTime}>
                            <Jobs src={currElement.fields.logo[0].url}/>
                            <Content>
                                <Title>{currElement.fields.career.join(", ")}</Title>
                                <ContainerText><ContentType>{currElement.fields.name_job}</ContentType></ContainerText>
                                <WrapperTags><TogleTags>{currElement.fields.type_job}</TogleTags><TogleTags>{currElement.fields.job_level}</TogleTags></WrapperTags>
                                <Link>
                                    Más Información
                                    <ArrowIcon />
                                </Link>
                            </Content>
                        </Wrapper>
                    </Container>
                ))}
        </div>
    )
}

const Container = styled.div`
    @media(min-width:1440px){
        display: flex;
        
    }
`

const Wrapper = styled.div`
    border-radius: 5px;
    border: 2px solid #5E5E5E;
    display: flex;
    height: 190px;
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
        border-radius: 5px;
        border: 2px solid #5E5E5E;
        height: 530px;
        width: 333px;
        flex-wrap: wrap;
    }
`
const PrincipalTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: #292929;
    font-size: 26px;
    font-weight: bold;
    margin-left: 16px;
    margin-top: 40px;
    @media(min-width:834px){
        font-size: 37px;
        margin-left: 32px;
        margin-top: 50px;
    }
`
const ArrowIcon = styled(ArrowForwardIosIcon)`
    color: #5755CC;
`
const Link = styled.a`
    display: none;
    @media(min-width:1440px){
        display: block;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #5755CC;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        margin-left: 138px;
        margin-top: 40px;
    }
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;
const Content = styled.div`
    align-items: start; 
    display: flex;
    flex-direction: column;
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
        width: 300px;
    }
`

const ContainerText = styled.div`
    align-items: start; 
    text-align: left;
    @media(min-width:834px){
        align-items: start; 
        text-align: left;
    }
    @media(min-width:1440px){
        text-align: left;
        width: 318px;
    }  
`

const Title = styled.div`
    margin-left: 4px;
    color: #5755CC;
    font-size: 12px;
    font-weight: 600;
    margin-top: 23px;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
@media(min-width:1440px){
    color: #7C7C7C;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    margin-top: 24px;

}
`

const ContentType = styled.p`
    margin-left: 4px;
    color: #292929;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    height: 75px;
    width: 185px;
    margin-top: 15px;
    @media(min-width:1440px){
        color: #5E5E5E;
        font-size: 26px;
        height: 75px;
        margin-bottom: 30px;
    }
`

const Jobs = styled.img`
    border-radius: 5px;
    float: left;
    height: 100px;
    margin-left: 16px;
    margin-top: 38px;
    width: 100px;
    @media(min-width:1440px){
        border-radius: 5px;
        float: left;
        height: 187px;
        margin: 16px 16px;
        width: 300px;
    }
`

export default Cards;