import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { WrapperTags, TogleTags } from "./Tags";

function Jobsview() {
  
  let {id} = useParams();
  const [infoCards, setInfoCards] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetch(`https://api.airtable.com/v0/appDz13O7ugHyw4mH/jobs/${id}`, {
        headers: {
          Authorization: "Bearer keyVGKRZEPpRENeUv",
        },
      })
      const cardhome = await data.json()
      setInfoCards(cardhome);
    }
    obtenerDatos()
  }, [id])

  if(!infoCards.id){
    return null
  }
    
  return (
    <Container>
      <Wrap>
        <JobHeader>
          <JobHeaderInfo>
            {infoCards.fields.logo ? <ItemImg src={infoCards.fields.logo[0].url} alt="Logo de la empresa" /> : <ItemImg src="../img/building.svg"/>}
            <Itemtext>
              <h6>{infoCards.fields.name_job}</h6>
              {infoCards.fields.salary ? <p>Salario: ${infoCards.fields.salary}</p> : <p>Salario no disponible</p>}
              <p>{infoCards.fields.name_company}</p>
              <p>{infoCards.fields.career}</p>
            </Itemtext>
          </JobHeaderInfo>
        </JobHeader>
        <JobDetails>
          <JobBodyInfo>
            <Description>
              <h3>Descripción del Trabajo</h3>
              <p>{infoCards.fields.description}</p>
            </Description>
            <h3>Nivel de Conocimientos</h3>
            <WrapperTags>
              {infoCards.fields.job_level.map((currentTypeJobLevel) => (
                <TogleTags>{currentTypeJobLevel}</TogleTags>
              ))}
            </WrapperTags>
            
            <h3>Modalidad de Trabajo</h3>
            <WrapperTags>
              {infoCards.fields.type_job.map((currentTypeJob) => (
                <TogleTags>{currentTypeJob}</TogleTags>
              ))}
            </WrapperTags>

            <h3>Contáctenos</h3>
            <p>{infoCards.fields.email}</p>

          </JobBodyInfo>
          {infoCards.fields.image_job ? <JobImgInfo><img src={infoCards.fields.image_job[0].url} alt="Imagen del trabajo"></img></JobImgInfo> : null}

          <OfferTime>La oferta laboral estará disponible 30 días.</OfferTime>
        </JobDetails>
      </Wrap>
    </Container>
  );
}

export default Jobsview;

const OfferTime = styled.p`
  margin-top: 40px;

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`
const Container = styled.div`
  height: 100%;
`;

const Wrap = styled.div`
  color: black;

  @media (min-width: 834px) {
    width: 770px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 100%;
    margin: auto;
  }
`;

const JobHeader = styled.div`
  color: black;
  border-radius: 0 0 5px 5px;
  border: 2px solid #292929;
  box-sizing: border-box;
  width: 100%;
`;

const JobHeaderInfo = styled.div`
  align-items: center;
  display: flex;
  margin: 24px auto;
  width: 343px;
  color: black;
  @media (min-width: 834px) {
    width: 770px;
  }
  @media (min-width: 1440px) {
    width: 1040px;
  }
`;
const ItemImg = styled.img`
  width: 100px;
  @media (min-width: 834px) {
    width: 150px;
  }
  @media (min-width: 1440px) {
    width: 150px;
  }
`;

const Itemtext = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 211px;
  margin-left: 32px;

  h6 {
    font-size: 20px;
    margin-bottom: 16px;
    margin-top: 0;

    @media (min-width: 1440px) {
      font-size: 26px;
    }
  }
  p {
    margin-bottom: 8px;
    margin-top: 0;
    color: #081f32;
    font-size: 14px;
    @media (min-width: 1440px) {
      font-size: 18px;
    }
  }
  p:nth-child(3) {
    font-weight: bolder;
  }
  p:nth-child(4) {
    font-weight: bold;
    color: #375bda;
    font-size: 12px;
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
  @media (min-width: 834px) {
    margin-left: 56px;
    width: 250px;
  }
  @media (min-width: 1440px) {
    margin-left: 56px;
    width: 350px;
  }
`;

const JobDetails = styled.div`
  color: black;
  margin: 32px auto;
  text-align: left;
  width: 343px;

  h3 {
    font-size: 20px;
    margin: 32px 0 8px 0;
  }
  h3:nth-child(1) {
    margin: 0 0 8px 0;
  }
  p {
    color: #5e5e5e;
    font-size: 18px;
  }

  @media (min-width: 834px) {
    width: 770px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    width: 1040px;
  }
`;

const Description = styled.div`
  width: 100%;
  color: black;
  p {
    width: 100%;
    color: #5e5e5e;
    font-size: 18px;
  }
`;

const JobBodyInfo = styled.div`
  width: 343px;
  color: black;
  @media (min-width: 834px) {
    width: 60%;
    margin-right: 16px;
  }
`;

const JobImgInfo = styled.div`
  width: 100%;
  margin-top: 48px;
  border-radius: 5px;

  img {
    width: 100%;
  }
  p {
    color: #5e5e5e;
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
`;
