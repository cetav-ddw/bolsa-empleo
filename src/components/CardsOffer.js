import React, { useState, useEffect,useContext } from 'react'
import styled from 'styled-components';
import { FilterContext } from '../filterContext';
import {WrapperTags, TogleTags} from './Tags';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Explorebutton from './Explorebutton'
import Filter from './Filter';

function CardsOffer() {
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
        <CardSection>
            <WrapperTitle>
                <TitleContent>
                    <PrincipalTitle><h2>Ofertas de empleo</h2></PrincipalTitle>
                    <Filter/>
                </TitleContent>
            </WrapperTitle>
            <Container>
                {
                    post.map(currElement => (
                       
                        <Wrapper key = {currElement.createdTime}>
                            <CardContent>
                                <Jobs src={currElement.fields.logo[0].url}/>
                                <Content>
                                    <Title>{currElement.fields.career.join(", ")}</Title>
                                    <ContentCompany>
                                        <CompanyName>{currElement.fields.name_company}</CompanyName>
                                    </ContentCompany>
                                    <ContainerText>
                                        <ContentType>{currElement.fields.name_job}</ContentType>
                                    </ContainerText>
                                    <WrapperTags>
                                        {currElement.fields.type_job.map((currentTypeJob) => (
                                        <TogleTags>{currentTypeJob}</TogleTags>
                                        ))}
                                        {currElement.fields.job_level.map((currentTypeJobLevel) => (
                                            <TogleTags>{currentTypeJobLevel}</TogleTags>
                                        ))}
                                    </WrapperTags>
                                    <ButtonCard>
                                        <Link>
                                            Más Información
                                            <ArrowIcon />
                                        </Link>
                                    </ButtonCard>
                                </Content>
                            </CardContent>
                        </Wrapper>
                    ))}
            </Container>
        </CardSection> 
    )
}

const CardSection = styled.div`
    margin: 0 auto;
    width: 343;
    @media(min-width:1440px){
        margin: 0 auto;
        width: 770px;
    }
    @media(min-width:1440px){
        margin: 0 auto;
        width: 1040px;
    }
`

const WrapperTitle = styled.div`
    @media(min-width:1440px){
       align-items: flex-end;
       display: flex;
       width: 1040px;
    }
`

const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 32px;
    width: 343px;
    @media(min-width: 834px){
        width: 770px;
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
    }
    @media(min-width: 1440px){
        width: 1040px;
    }
`

const PrincipalTitle = styled.div`
    h2 {
        color: #5755CC;
        font-family: 'Poppins', sans-serif;
        font-size: 26px;
        font-weight: bolder;
        margin-bottom: 32px;
    }
    @media(min-width:834px){
        font-size: 37px;
        margin-top: 50px;
    }
`

const Container = styled.div`
    @media(min-width:1440px){
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 1040px;
    }
`

const Wrapper = styled.div`
    border-radius: 5px;
    border: 2px solid #5E5E5E;
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
    margin: 32px auto;
    width: 343px; 
    @media(min-width:834px){
        display: flex;
        width: 770px;
    }
    @media(min-width:1440px){
        align-items: center;
        border-radius: 5px;
        border: 2px solid #5E5E5E;
        display: flex;
        flex-direction: column;
        width: 333px;
    }
`

const CardContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 0;
    width: 310px;
    @media(min-width:834px){
        margin: auto 16px;
        width: 85%;
    }
    @media(min-width:1440px){
        display: flex;
        flex-direction: column;
        margin: 0;
        width: 90%;
    }
`

const Jobs = styled.img`
    border-radius: 5px;
    width: 100px;
    @media(min-width:834px){
        border-radius: 5px;
        margin-right: 40px;
        width: 125px;
    }
    @media(min-width:1440px){
        border-radius: 5px;
        margin: 0;
        width: 100%;
    }
`

const Content = styled.div`
    align-items: start; 
    display: flex;
    flex-direction: column;
    width: 194px;
    @media(min-width:834px){
        align-items: start; 
        display: flex;
        flex-direction: column;
        width: 545px;
    }
    @media(min-width:1440px){
        width: 100%;
    }
`

const Title = styled.div`
    color: #5755CC;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
    width: 100%;
    @media(min-width:1440px){
        color: #5755CC;
        font-size: 16px;
        font-weight: bolder;
        margin-top: 24px;
    }
`

const ContentCompany = styled.div`
`

const CompanyName = styled.p`
    color: #292929;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: bolder;
    @media(min-width:1440px){
        font-size: 22px;
    }
`

const ContainerText = styled.div`
    align-items: start; 
    text-align: left;
    width: 100%;
    @media(min-width:834px){
        align-items: start; 
        text-align: left;
    }
    @media(min-width:1440px){
        text-align: left;
        width: 318px;
    }  
`

const ContentType = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin-bottom: 16px;
    @media(min-width:1440px){
        color: #5E5E5E;
        font-size: 18px;
    }
`

const ButtonCard = styled.div` 
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const Link = styled.a`
    display: none;
    @media(min-width:1440px){
        align-items: center;
        color: #5755CC;
        display: flex;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: bolder;
        justify-content: flex-end;
        text-decoration: none;
    }
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`

const ArrowIcon = styled(ArrowForwardIosIcon)`
    color: #5755CC;
`

export default CardsOffer;