import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate("/home");
    });
  };

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
          </form>
          <button className="google__btn" onClick={handleGoogleSignIn}>
            <FcGoogle className="fs-3" />
            <span> Continue With Google</span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Register;
