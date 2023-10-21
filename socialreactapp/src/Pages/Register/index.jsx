import React from "react";
import "./style2.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">RehimliSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on RehimliSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              className="loginInput"
            />
            <button className="loginButton">
              <Link className="LinkRegister" to='/'>
              Sign Up
              </Link>
            </button>

            <button className="loginRegisterButton">Log Into Account..</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
