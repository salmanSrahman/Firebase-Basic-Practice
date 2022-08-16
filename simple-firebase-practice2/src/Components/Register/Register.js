import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleGoogleSignIn } = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleName = (event) => {
    console.log(event.target.value);
  };
  const handleEmail = (event) => {
    console.log(event.target.value);
  };
  const handlePassword = (event) => {
    console.log(event.target.value);
  };

  const navigate = useNavigate();

  const handleRegister = (event) => {
    navigate("/login");
  };

  return (
    <div className="">
      <Container>
        <h1>Here is register.</h1>
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
