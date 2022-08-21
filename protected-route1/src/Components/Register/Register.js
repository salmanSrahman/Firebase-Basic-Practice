import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";

import auth from "../../firebase.init";

const Register = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  if (user) {
    navigate("/home");
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  // handle google sign up

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegisterForm = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  // handle create user with email & password

  return (
    <div>
      <Container>
        <div className="form__part">
          <h1 className="form__title text-center">Sign Up</h1>
          <form action="" onSubmit={handleRegisterForm}>
            <div className="form__group mb-2">
              <label htmlFor="name">Name</label>
              <input type="text" name="Your name" id="" onBlur={handleName} />
            </div>
            <div className="form__group mb-2">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" onBlur={handleEmail} />
            </div>
            <div className="form__group mb-2">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                name="password"
                id=""
                onBlur={handlePassword}
              />
            </div>
            <div className="form__group mb-2">
              <label htmlFor="email">Confirm Password</label>
              <input
                type="password"
                name="password"
                id=""
                onBlur={handleConfirmPassword}
              />
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
