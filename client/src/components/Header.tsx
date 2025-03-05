import { NavLink } from "react-router-dom";
export const Header =()=>{
    return (
        <nav>
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/login">Login</NavLink>
            <NavLink to ="/register">Register</NavLink>
        </nav>
    )
}