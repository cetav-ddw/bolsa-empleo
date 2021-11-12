import React from "react";
import styled from "styled-components";

function Form() {
  const info = {
    url: "https://airtable.com/embed/shrPralx9S6G1qBrj",
  };
  return (
    <div>
      <Formulario src={info.url} />
    </div>
  );
}

const Formulario = styled.iframe`
  background: transparent;
  border: none;
  height: 2200px;
  overflow: hidden;
  width: 100%;
`;
export default Form;
