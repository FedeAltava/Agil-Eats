import "./Register.css";
export const Register = () => {
  return (
    <section>
      <div className="container">
        
        <form action="">
        <h1>Register</h1>
        <div className="Name column">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="" className="Email column">
            Email
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="" className="Password column">
            Password
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="" className="Role column">
            Role
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="" className="Address column">
            Address
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="" className="Phone column">
            Phone
          </label>
          <input type="text" />
        </div>
        <button type="submit" className="submit">Register</button>
        </form>
      </div>
    </section>
  );
};
