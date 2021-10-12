import {React,useState} from "react";
import styled from 'styled-components';

export default function Filter(){
    const [filterValue, setValue] = useState({
        value: "Filtrar por tecnico"
    });
    return(
        <Container>
            <select value={filterValue.value} onChange={(e) => setValue({ value: e.target.value })}>
                <option disabled hidden value="Filtrar por tecnico">Filtrar por tecnico</option>
                <option value="Diseño y desarrollo web">Diseño y desarrollo web</option>
                <option value="Animación 3D">Animación digital 3D</option>
                <option value="PostProducción">Edición y Postproducción de imagen y sonido</option>
                <option value="Mercadeo Digital">Mercadeo digital, diseño y imagen comercial</option>
            </select>
        </Container>
    );
}

const Container = styled.div`
    width: 365px;
    margin: 0 auto;
    select{
        color:white;
        background-color: black;
        border-radius : 4px;
        width:100%;
        height: 40px;
        font-size:16px;
        }
    }
`



