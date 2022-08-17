import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "../../Firebase.init/firebase.init";

const auth = getAuth(app);

const Register = () => {
  const { handleGoogleSignIn } = useFirebase();
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (event) => {
    navigate("/login");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        handleUpdateUser();
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };
  // create user using email, password

  const handleUpdateUser = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  // handle update user

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  // handle sign out

  return (
    <div className="">
      <Container>
        <h1>Here is register.</h1>
        {user?.email}
        <div className="my-5 text-center">
          <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
        </div>
        <div className="form__part">
          <Form onClick={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                onBlur={handleName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onBlur={handleEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onBlur={handlePassword}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
            <Button
              variant="danger"
              type="submit"
              onClick={handleSignOut}
              className="ms-2"
            >
              Sign Out
            </Button>

            <Button variant="link" onClick={handleRegister} className="d-block">
              Already Registered?
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
