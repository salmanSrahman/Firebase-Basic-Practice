import React, { useState } from "react";
import "./Login.css";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

const Login = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  // handle google login

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    await sendPasswordResetEmail(email).then(() => {
      alert("Password reset");
    });
  };

  return (
    <div>
      <Container>
        <div className="login__part">
          <h1 className="form__title text-center">Login</h1>
          <form action="" onSubmit={handleLogIn}>
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
            <button className="signup__btn">Login</button>
            <div className="text-center transfer__login pt-1">
              <span>New to ema-john?</span>{" "}
              <Link to="/register">Create New Account</Link>
              <Button variant="link" onClick={handleResetPassword}>
                Reset Password
              </Button>
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

export default Login;
