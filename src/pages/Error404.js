import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Container>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </Container>
  );
}

export default ErrorPage;

const Container = styled.div`
  margin: 0;
  height: 100vh;
  width: 100%;
  background-image: url("img/page-404.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 105px;
    font-family: "Poppins";
  }
  p {
    font-size: 26px;
    font-family: "Open Sans";
  }
  a {
    background-color: #5755cc;
    border-radius: 5px;
    color: white;
    padding: 18px 16px;
    text-decoration: none;
    margin-top: 32px;
  }
`;
