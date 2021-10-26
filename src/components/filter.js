import {React,useContext} from "react";
import styled from 'styled-components';
import { FilterContext } from '../filterContext';

export default function Filter(){
    const [context,setContext] = useContext(FilterContext);
    return(
        <Container>
            <h1>Ofertas de Empleo</h1>
            <select value={context} onChange={(e) => setContext( e.target.value )}>
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
    width: 90%;
    margin: 0 auto;
    h1{
        margin-bottom:2rem;
        font-family: 'Poppins', sans-serif;
        color: #292929;
        font-size: 26px;
        font-weight: bold;
    }
    select{
        color:#292929;
        background-color: transparent;
        border-radius : 5px;
        border: 3px solid #7c7c7c;
        width:100%;
        height: 40px;
        font-size:1rem;
        font-family: 'Poppins', sans-serif;
        option{
            color:#7c7c7c;
            font-family: 'Poppins', sans-serif;
            border-radius : 5px;
            border: 3px solid #7c7c7c;
        }
        
        @media(min-width:834px){
            width:24%
        }
        @media(min-width:1040px){
            width:15%
        }
    }
    @media(min-width:834px){
        margin-top:48px;
        width: 93%;
        display:flex;
        justify-content:space-between;
    }
`