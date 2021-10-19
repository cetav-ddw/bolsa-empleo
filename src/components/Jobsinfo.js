import React from "react"
import styled from 'styled-components'

function Jobsinfo({title, salarie, company, career, logo, description, email, jobImg, alt}) {
    return (
        <Wrap>
            <JobHeader>
                <JobHeaderInfo>
                    <ItemImg >
                        <img src={logo} atl={alt}></img>
                    </ItemImg>
                    <Itemtext>
                        <h6>{title}</h6>
                        <p>{salarie}</p>
                        <p>{company}</p>
                        <p>{career}</p>
                    </Itemtext>
                </JobHeaderInfo>    
            </JobHeader>
            <JobDetails>
                <JobBodyInfo>
                    <Description>
                        <h3>Descripción del Trabajo</h3>
                        <p>{description}</p>
                    </Description>
                    <h3>Técnico</h3>
                    <h3>Nivel de Conocimientos</h3>
                    <h3>Modalidad de Trabajo</h3>
                    <h3>Contáctenos</h3>
                    <p>{email}</p>
                </JobBodyInfo>
                <JobImgInfo >
                    <img src={jobImg} atl={alt} ></img>
                    <p>La oferta laboral estará disponible 30 días.</p>
                </JobImgInfo>
                
            </JobDetails>
        </Wrap>
        
    )
}

export default Jobsinfo


const Wrap = styled.div`
    color:black;    
    @media (min-width: 834px) {
        width: 100%;
    }

`

const JobHeader = styled.div`
    color:black;  
    border-radius: 0 0 5px 5px;
    border: 2px solid #292929;
    box-sizing: border-box;
    width: 100%;
`

const JobHeaderInfo = styled.div`
    align-items: flex-start;
    display: flex;
    margin: 24px auto;
    width: 343px;
    color:black;  
    @media (min-width: 834px) {
        width: 770px;
    }
    @media (min-width: 1440px) {
        width: 1240px;
    }
`
const ItemImg = styled.div` 

    img {
        border-radius: 5px;
        width: 100px;
    }
`

const Itemtext = styled.div`
    color:black;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 211px;
    margin-left: 32px;
    
    h6 {
        font-size: 20px;
        margin-bottom: 4px;
        margin-top: 0;
    }
    p {
        margin-bottom: 8px;
        margin-top: 0;
        color: #081F32;
        font-size: 14px;
    }
    p:nth-child(3) {
        font-weight: bolder;
    }
    p:nth-child(4) {
        font-weight: bold;
        color: #375BDA;
        font-size: 12px;
    }

    @media (min-width: 834px) {
        margin-left: 56px;
    }
    @media (min-width: 1440px) {
        margin-left: 56px;
    }
`

const JobDetails = styled.div`
    color:black;
    margin: 32px auto;
    text-align: left;
    width: 343px;

    h3{
        font-size: 20px;
        margin: 32px 0 8px 0;
    }
    h3:nth-child(1){
        margin: 0 0 8px 0;
    }
    p{
        color: #5E5E5E;
        font-size: 18px;
    }

    @media (min-width: 834px) {
        width: 770px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 1440px) {
        width: 1240px;
    }
`

const Description = styled.div`
    width: 100%;
    color:black;
    p{
        width: 100%;
        color: #5E5E5E;
        font-size: 18px;
    }
`

const JobBodyInfo = styled.div`
    width: 343px;
    color:black;
    @media (min-width: 834px) {
        width: 60%;
        margin-right: 16px;
    }
`

const JobImgInfo = styled.div`
    width: 100%;
    margin-top: 48px;
    border-radius: 5px;

    img{
        width: 100%;
    }
    p{
        color: #5E5E5E;
        font-size: 12px;
        font-weight: bolder;
    }

    @media (min-width: 834px) {
        margin-top: 0;
        width: 60%;
    }

    @media (min-width: 1440px) {
        width: 50%;
    }
`