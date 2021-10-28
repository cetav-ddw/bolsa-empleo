import styled from "styled-components";
import Jobsinfo from "./Jobsinfo";
import {React, useContext} from "react";
import IdContext from "../IdContext"

function Jobsview(props) {
  /* let currentCard = props.id
    console.log(currentCard) */
  const [contextCards] = useContext(IdContext);
  console.log('este es el contexto', contextCards)
  fetch(`https://api.airtable.com/v0/appDz13O7ugHyw4mH/jobs/${contextCards}`, {
    headers: {
      Authorization: "Bearer keyVGKRZEPpRENeUv",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      return (
        <Container>
          <Jobsinfo
            
            title="Front-end Developer"
            salarie="$1200 / month"
            company="Accenture"
            career="Desarollo web"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra efficitur sem id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra efficitur sem id."
            email="erudito@gmail.com"
            jobImg="/img/img-job.png"
            alt="Kendoll"
          />
        </Container>
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

export default Jobsview;

const Container = styled.div`
  height: 100%;
  //border: 2px solid #292929;
`;
