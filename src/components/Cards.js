import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "../filterContext";
import { WrapperTags, TogleTags } from "./Tags";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Filter from "./Filter";
import { Link } from "react-router-dom";
// codigo
function Cards() {
  const [post, setPost] = useState([]);
  const [context] = useContext(FilterContext);
  const [errorHandler, setErrorHandler] = useState(false);
  const [errorMessage, setErrorMessage] = useState(" ");
  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appWTWqC62qUVcz9w/Jobs?sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc",{
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
    .then((response) => {
      if(!response.ok){
        throw Error("No se pudieron cargar las ofertas, por favor inténtelo más tarde o recargue la página.")
      }
      return response.json();
    })
    .then((res) => {
      if (context === "Filtrar por tecnico") {
        setPost(res.records);
      } else {
        const filteredOptions = res.records.filter((card) => {
          return card.fields.career[0].includes(context);
        });
        if (filteredOptions) {
          setPost(filteredOptions);
        }
      }
      setErrorHandler(false)
    })
    .catch((err) => {
      setErrorMessage(err.message)
      setErrorHandler(true)
    });
  },[context]);
  return (
    <CardSection>
      <WrapperTitle>
        <TitleContent>
          <PrincipalTitle>
            <h2>Ofertas Laborales</h2>
          </PrincipalTitle>
          <Filter />
        </TitleContent>
      </WrapperTitle>
      <Container>
        {errorHandler ? <ErrorMessage><p>{errorMessage}</p></ErrorMessage> : 
          post.map((currElement) => (
            <Link to={`/oferta/${currElement.id}`}>
              <Wrapper key={currElement.createdTime}>
                <CardContent>
                  {currElement.fields.logo ? <JobsImgContainer><Jobs src={currElement.fields.logo[0].url} /></JobsImgContainer>  : <JobsImgContainer><Jobs src="img/imac.svg"/></JobsImgContainer>}
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
                      <Link to={`/oferta/${currElement.id}`}>
                        Más Información
                        <ArrowIcon />
                      </Link>
                    </ButtonCard>
                  </Content>
                </CardContent>
              </Wrapper>
            </Link>
          ))
        }
      </Container>
    </CardSection>
  );
}

const CardSection = styled.div`
  margin: 0 auto;
  width: 343;
  @media (min-width: 1440px) {
    margin: 0 auto;
    width: 770px;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    width: 1040px;
  }
`;

const WrapperTitle = styled.div`
  @media (min-width: 1440px) {
    align-items: flex-end;
    display: flex;
    width: 1040px;
  }
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 24px;
  width: 343px;
  @media (min-width: 834px) {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 770px;
  }
  @media (min-width: 1440px) {
    width: 1040px;
  }
`;

const PrincipalTitle = styled.div`
  h2 {
    color: #2e2e2e;
    font-family: "Poppins", sans-serif;
    font-size: 37px;
    font-weight: bolder;
    margin-bottom: 24px;
  }
  @media (min-width: 834px) {
    font-size: 37px;
    margin-top: 50px;
  }
`;

const Container = styled.div`
  margin-bottom: 48px;

  @media (min-width: 1440px) {
    display: grid;
    flex-wrap: wrap;
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 1040px;
  }
`;

const ErrorMessage = styled.div`
  align-items: center;
  border-radius: 5px;
  border: 2px solid #2E2E2E;
  display: flex;
  justify-content: center;
  margin: 16px auto;
  width: 343px;

  @media (min-width: 834px) {
    margin: 0 auto;
    width: 770px;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    width: 1040px;
  }

  p {
    font-family: "Poppins";
    font-size: 20px;
    font-weight: bold;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  border-radius: 10px;
  border: 2px solid #5e5e5e;
  display: flex;
  justify-content: space-between;
  margin: 32px auto;
  width: 343px;

  @media (min-width: 834px) {
    display: flex;
    width: 770px;
  }
  @media (min-width: 1440px) {
    align-items: center;
    border-radius: 10px;
    border: 2px solid #5e5e5e;
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 333px;
  }
`;

const CardContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  width: 310px;

  @media (min-width: 834px) {
    margin: auto 16px;
    width: 85%;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 90%;
  }
`;

const JobsImgContainer = styled.div`
  align-items: center;
  display: flex;
  width: 100px;

  @media (min-width: 834px) {
    margin-right: 40px;
    width: 125px;
  }
  @media (min-width: 1440px) {
    height: 250px;
    margin: 0;
    width: 225px;
  }
`;

const Jobs = styled.img`
  border-radius: 10px;
  width: 100px;

  @media (min-width: 834px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const Content = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  width: 194px;
  @media (min-width: 834px) {
    align-items: start;
    display: flex;
    flex-direction: column;
    width: 545px;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const Title = styled.div`
  color: #898a89;
  display: flex;
  flex-wrap: wrap;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  width: 100%;
  @media (min-width: 1440px) {
    font-size: 16px;
    font-weight: bolder;
    height: 50px;
    margin-top: 24px;
  }
`;

const ContentCompany = styled.div``;

const CompanyName = styled.p`
  color: #292929;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: bolder;

  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

const ContainerText = styled.div`
  align-items: start;
  text-align: left;
  width: 100%;

  @media (min-width: 834px) {
    align-items: start;
    text-align: left;
  }
  @media (min-width: 1440px) {
    text-align: left;
    width: 318px;
  }
`;

const ContentType = styled.p`
  color: #5e5e5e;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  margin-bottom: 16px;

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

const ButtonCard = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  a {
    display: none;
    @media (min-width: 1440px) {
      align-items: center;
      color: #cd552d;
      display: flex;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      font-weight: bolder;
      justify-content: flex-end;
      text-decoration: none;
    }
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const ArrowIcon = styled(ArrowForwardIosIcon)`
  color: #cd552d;
`;

export default Cards;
