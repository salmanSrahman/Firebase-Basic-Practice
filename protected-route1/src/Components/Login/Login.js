import React from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <Container>
        <div className="login__part">
          <h1 className="form__title text-center">Login</h1>
          <form action="">
            <div className="form__group mb-2">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" />
            </div>
            <div className="form__group mb-2">
              <label htmlFor="email">Password</label>
              <input type="password" name="password" id="" />
            </div>
            <button className="signup__btn">Login</button>
            <div className="text-center transfer__login pt-1">
              <span>New to ema-john?</span>{" "}
              <Link to="/register">Create New Account</Link>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-row my-4">
              <div className="line"></div>
              <div className="text-secondary fw-bold">OR</div>
              <div className="line"></div>
            </div>
            <button className="google__btn">
              <FcGoogle className="fs-3" />
              <span> Continue With Google</span>
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
