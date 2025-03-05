import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar =()=>{
    return (
        <nav className="navbar">
            <NavLink to ="/" className="nav-link">Agil-Eats</NavLink>
            <NavLink to ="/login" className="nav-link">Login</NavLink>
            <NavLink to ="/register" className="nav-link">Register</NavLink>
        </nav>
    )
}