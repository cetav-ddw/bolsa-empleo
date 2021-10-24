import {React,useContext} from "react";
import styled from 'styled-components';
import { FilterContext } from '../filterContext';

export default function Filter(){
    const [context,setContext] = useContext(FilterContext);
    return(
        <Container>
            <h1>Ofertas Laborales</h1>
            <select value={context} onChange={(e) => setContext( e.target.value )}>
                <option value="Filtrar por tecnico">Todos los tecnicos</option>
                <option value="Diseño y desarrollo web">Diseño y desarrollo web</option>
                <option value="Animación 3D">Animación digital 3D</option>
                <option value="PostProducción">Edición y Postproducción de imagen y sonido</option>
                <option value="Mercadeo Digital">Mercadeo digital, diseño y imagen comercial</option>
            </select>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    h1{
        margin-bottom:2rem;
    }
    select{
        color:white;
        background-color: black;
        border-radius : 4px;
        width:100%;
        height: 40px;
        font-size:1rem;
        option{
            color:white;
        }
        @media(min-width:834px){
            width:24%
        }
        @media(min-width:1040px){
            width:15%
        }
    }
    @media(min-width:834px){
        width: 80%;
        display:flex;
        justify-content:space-between;
    }
`