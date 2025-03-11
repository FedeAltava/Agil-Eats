import { useState } from "react";
import "./Login.css";
import axios from "axios";
export const Login = ()=>{
    const [ email, setEmail ] = useState<string>("")
    const [passWord, setPassWord] = useState<string>("");
    const [ error, setError] = useState<string | null>(null);
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!email || !passWord){
            setError("All areas are mandatories");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Email is not valid");
            return;
          }
        try{
            const response = await axios.post("http://localhost:5000/api/auth/login",{email, passWord});
            localStorage.setItem("token",response.data.token);
            alert("Succesfull Login")
            window.location.href = "/";
        }catch(error){
            setError(error instanceof Error ? error.message : "An unexpected error occurred");
        }
    }
    return(
        <section>
            <form className="form" onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="" className="">Email</label>
                    <input type="text" value={email} onChange={(event) =>setEmail(event.target.value)}/>
                </div>
                <div className="passWord">
                    <label htmlFor=""> Password</label>
                    <input type="text" value={passWord} onChange={(event)=>setPassWord(event.target.value)}/>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Log in</button>
            </form>
        </section>
    )
}