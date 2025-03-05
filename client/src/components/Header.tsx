import { NavLink } from "react-router-dom";
export const Header =()=>{
    return (
        <nav>
            <NavLink to ="/"></NavLink>
            <NavLink to ="/login"></NavLink>
            <NavLink to ="/register"></NavLink>
            <NavLink to ="/restaurant/:id"></NavLink>
            <NavLink to ="/cart"></NavLink>
        </nav>
    )
}