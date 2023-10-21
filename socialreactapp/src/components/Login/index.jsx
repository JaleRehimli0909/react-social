import React from "react";
import "./style.css";

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
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgot Pawwword?</span>
            <button className="loginRegisterButton">
              Create a New Account..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
