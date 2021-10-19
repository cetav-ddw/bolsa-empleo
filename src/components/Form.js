import React from "react";
import styled from 'styled-components';

function Form(){
    const info ={
        url:"https://airtable.com/embed/shrPralx9S6G1qBrj"
    }
    return(
    <div>
        <Formulario src={info.url}/>
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