import { React, useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "../filterContext";

export default function Filter() {
  const [context, setContext] = useContext(FilterContext);
  return (
    <Container>
      <select value={context} onChange={(e) => setContext(e.target.value)}>
        <option value="Filtrar por tecnico">Todos los técnicos</option>
        <option value="Diseño y desarrollo web">Diseño Web</option>
        <option value="Animación 3D">Animación 3D</option>
        <option value="PostProducción">Postproducción</option>
        <option value="Mercadeo Digital">Mercadeo digital</option>
      </select>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  select {
    background-color: transparent;
    border-radius: 5px;
    border: 3px solid #7c7c7c;
    color: #292929;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    height: 40px;
    width: 100%;
    option {
      border-radius: 5px;
      border: 3px solid #7c7c7c;
      color: #7c7c7c;
      font-family: "Poppins", sans-serif;
    }

    @media (min-width: 834px) {
      width: 24%;
    }
    @media (min-width: 1040px) {
      width: 18%;
    }
  }
  @media (min-width: 834px) {
    display: contents;
    width: 80%;
  }
`;
