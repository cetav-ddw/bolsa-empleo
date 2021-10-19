import { Link } from "react-router-dom"

function Menuconceptos() {
    return(
        <nav>
            <ol>
                <li>
                    <span>Componente Link</span>
                    <Link to="/">Inicio</Link>
                    <Link to="/ofertas">Ofertas Laborales</Link>
                    <Link to="/publicar">Publicar Oferta Laboral</Link>
                </li>
            </ol> 
        </nav>
    )
}


export default Menuconceptos