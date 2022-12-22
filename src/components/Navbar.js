import "./Navbar.css";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom"

export default function Navbar () {  
    return (
        <div className="navbar-container">   
            <h2>Nova Music</h2>
            <Link to="/">
                <button className="navbar-button">Inicio</button>
            </Link>
            <Link to="/equipos">
                <button className="navbar-button">Nuestros Equipos</button>
            </Link>
            <Link to="/audio">
                <button className="navbar-button">Contactos</button>
            </Link>
            <Link to="/preguntas">
                <button className="navbar-button">Preguntas Frecuentes</button>
            </Link>
            <CardWidget />
        </div>
    )
}