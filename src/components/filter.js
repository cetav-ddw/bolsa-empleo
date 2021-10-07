import {React,useState} from "react";
import styled from 'styled-components';

export default function Filter(){
    const [filterValue, setValue] = useState({
        value: "Filtrar por tecnico"
    });
    return(
        <Container>
            <select value={filterValue.value} onChange={(e) => setValue({ value: e.target.value })} onClick ={()=>{console.log('Your job categorie is' + ' ' + filterValue.value)}}>
                <option disabled hidden value="Filtrar por tecnico">Filtrar por tecnico</option>
                <option value="web">Diseño y desarrollo web</option>
                <option value="animacion">Animación digital 3D</option>
                <option value="post-produccion">Edición y Postproducción de imagen y sonido</option>
                <option value="mercadeo">Mercadeo digital, diseño y imagen comercial</option>
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



