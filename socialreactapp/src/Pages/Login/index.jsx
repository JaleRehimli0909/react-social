import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
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
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">
              <Link className="LinkLogin" to="/">
                Log in
              </Link>
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link className="LinkLogin" to="/register">
                Create a New Account..
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
