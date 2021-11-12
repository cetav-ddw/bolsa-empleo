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
  align-items: center;
  background-image: url("img/page-404.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0;
  width: 100%;
  h1 {
    font-family: "Poppins";
    font-size: 105px;
  }
  p {
    font-family: "Open Sans";
    font-size: 26px;
    
  }
  a {
    background-color: #CD552D;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    margin-top: 32px;
    padding: 18px 16px;
    text-decoration: none;
  }
`;
