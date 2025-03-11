import "./Register.css"
export const Register =()=>{
    return(
        <section>
            <div className="Name">
                <label htmlFor="">Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="" className="Email">Email</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="" className="Password">Password</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="" className="Role">Role</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="" className="Address">Address</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="" className="Phone">Phone</label>
                <input type="text" />
            </div>
        </section>
    )
}