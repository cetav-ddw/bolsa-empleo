import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { WrapperTags, TogleTags } from "./Tags";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Suscriber from "../components/Suscriber";

function Jobsview() {
  let { id } = useParams();
  const [infoCards, setInfoCards] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetch(
        `https://api.airtable.com/v0/appDz13O7ugHyw4mH/jobs/${id}`,
        {
          headers: {
            Authorization: "Bearer keyVGKRZEPpRENeUv",
          },
        }
      );
      const cardhome = await data.json();
      setInfoCards(cardhome);
    };
    obtenerDatos();
  }, [id]);

  if (!infoCards.id) {
    return null;
  }
  console.log(infoCards.fields.requeriments.split("-"));

  return (
    <Container>
      <Navbar />
      <Wrap>
        <JobHeader>
          <JobHeaderInfo>
            {infoCards.fields.logo ? (
              <ItemImg
                src={infoCards.fields.logo[0].url}
                alt="Logo de la empresa"
              />
            ) : (
              <ItemImg src="../img/imac.svg" />
            )}
            <Itemtext>
              <h6>{infoCards.fields.name_job}</h6>
              {infoCards.fields.salary ? (
                <p>Rango salarial: ${infoCards.fields.salary}</p>
              ) : null}
              <p>{infoCards.fields.name_company}</p>
              <p>{infoCards.fields.career.join(", ")}</p>
            </Itemtext>
          </JobHeaderInfo>
        </JobHeader>
        <JobDetails>
          <JobBodyInfo>
            {infoCards.fields.description ? (
              <Description>
                <h3>Descripción del Trabajo</h3>
                <p>{infoCards.fields.description}</p>
              </Description>
            ) : null}

            {infoCards.fields.requeriments ? (
              <Requirements>
                <h3>Requisitos</h3>
                {infoCards.fields.requeriments
                  .split("\n")
                  .map((currentRequeriments) => (
                    <ActualRequirement>{currentRequeriments}</ActualRequirement>
                  ))}
              </Requirements>
            ) : null}

            <Level>
              <h3>Nivel de Conocimientos</h3>
              <WrapperTags>
                {infoCards.fields.job_level.map((currentTypeJobLevel) => (
                  <TogleTags>{currentTypeJobLevel}</TogleTags>
                ))}
              </WrapperTags>
            </Level>

            <Modality>
              <h3>Modalidad de Trabajo</h3>
              <WrapperTags>
                {infoCards.fields.type_job.map((currentTypeJob) => (
                  <TogleTags>{currentTypeJob}</TogleTags>
                ))}
              </WrapperTags>
            </Modality>

            <Contact>
              <h3>Contáctenos</h3>
              <p>{infoCards.fields.email}</p>
            </Contact>
          </JobBodyInfo>
          {infoCards.fields.image_job ? (
            <JobImgInfo>
              <img
                src={infoCards.fields.image_job[0].url}
                alt="Imagen del trabajo"
              ></img>
              <p>La oferta laboral estará disponible 30 días.</p>
            </JobImgInfo>
          ) : (
            <p>La oferta laboral estará disponible 30 días.</p>
          )}
        </JobDetails>
      </Wrap>
      <Suscriber />
      <Footer />
    </Container>
  );
}

export default Jobsview;

const Container = styled.div`
  height: 100%;
`;

const Wrap = styled.div`
  color: black;
  @media (min-width: 834px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 100%;
    margin: auto;
  }
`;

const JobHeader = styled.div`
  border-radius: 0 0 5px 5px;
  border: 2px solid #292929;
  box-sizing: border-box;
  color: black;
  width: 100%;
`;

const JobHeaderInfo = styled.div`
  align-items: center;
  color: black;
  display: flex;
  margin: 24px auto;
  width: 343px;
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
  margin-left: 32px;
  text-align: left;
  width: 211px;
  h6 {
    font-family: "Poppins";
    font-size: 20px;
    margin-bottom: 16px;
    margin-top: 0;
    @media (min-width: 1440px) {
      font-size: 26px;
    }
  }
  p {
    color: #081f32;
    font-family: "Open Sans";
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 0;
    @media (min-width: 1440px) {
      font-size: 18px;
    }
  }
  p:nth-child(3) {
    font-family: "Poppins";
    font-weight: bolder;
  }
  p:nth-child(4) {
    color: #898a89;
    font-family: "Poppins";
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
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
    width: 450px;
  }
`;

const JobDetails = styled.div`
  margin: 32px auto;
  width: 343px;
  @media (min-width: 834px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 770px;
  }
  @media (min-width: 1440px) {
    width: 1040px;
  }
`;

const JobBodyInfo = styled.div`
  width: 100%;
  text-align: left;
  h3 {
    color: black;
    font-family: "Poppins";
    font-size: 20px;
    margin: 32px 0 8px 0;
  }
  p {
    color: #5e5e5e;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
  }
  @media (min-width: 834px) {
    width: 60%;
    margin-right: 16px;
  }
`;

const Description = styled.div`
  color: black;
  width: 100%;
  h3 {
    font-family: "Poppins";
  }
  p {
    color: #5e5e5e;
    font-size: "Open Sans";
    font-size: 18px;
    width: 100%;
  }
`;

const Requirements = styled.div`
  color: black;
  margin-top: 32px;
  width: 100%;
  h3 {
    font-family: "Poppins";
  }
  p {
    color: #5e5e5e;
    font-size: "Open Sans";
    font-size: 18px;
    width: 100%;
  }
`;
const ActualRequirement = styled.p`
  padding-bottom: 16px;
`;
const Level = styled.div``;
const Modality = styled.div``;
const Contact = styled.div``;

const JobImgInfo = styled.div`
  border-radius: 5px;
  margin-top: 48px;
  width: 100%;
  img {
    width: 100%;
  }
  p {
    color: #5e5e5e;
    font-size: 16px;
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