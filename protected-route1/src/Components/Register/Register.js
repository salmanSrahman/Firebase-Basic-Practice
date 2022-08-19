import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <Container>
        <div className="form__part">
          <h1 className="form__title text-center">Sign Up</h1>
          <form action="">
            <div className="form__group mb-2">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" />
            </div>
            <div className="form__group mb-2">
              <label htmlFor="email">Password</label>
              <input type="password" name="password" id="" />
            </div>
            <div className="form__group mb-2">
              <label htmlFor="email">Confirm Password</label>
              <input type="password" name="password" id="" />
            </div>
            <button className="signup__btn">Sign Up</button>
            <div className="text-center transfer__login pt-1">
              <span>Already have an account?</span>{" "}
              <Link to="/login">Login</Link>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-row my-4">
              <div className="line"></div>
              <div className="text-secondary fw-bold">OR</div>
              <div className="line"></div>
            </div>
            <button className="google__btn">Continue With Google</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
