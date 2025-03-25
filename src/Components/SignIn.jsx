import React from "react";
import { Link } from "react-router-dom";

const signin = () => {
  
  return (
    <div className="row justify-content-center mt-4 ">
      <div className="col-md-6 card shadow p-2 dola">
        <h1>
          <b>Sign In</b>
        </h1>
        <form action="">
          <input type="text" placeholder="Enter username" className="form-control"/>
          <br />
          <input type="password" placeholder="Enter password" className="form-control"/>
          <br />
          <button type="submit" className="btn btn btn-outline-success bg-dark text-white"> Sign In</button>
          <br />
          <p>
            Already have an account? <Link to="/Signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signin;
