import { useState } from "react";
import "./Login.css";
export const Login = ()=>{
    const [ email, setEmail ] = useState("")

    return(
        <section>
            <form>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={(event) =>setEmail(event.target.value)}/>
                <label htmlFor=""> Password</label>
                <input type="text" />
            </form>
        </section>
    )
}