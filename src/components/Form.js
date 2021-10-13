import React from "react";
import styled, { StyledComponent } from 'styled-components';

function Form(){
    return(
    <div>
        <Formulario src="https://airtable.com/embed/shrPralx9S6G1qBrj"/>
    </div>

    );
}

const Formulario = styled.iframe`
    width: 100%;
    height: 2200px;
    overflow: hidden;
    background: transparent;
    border: none;
`
export default Form;