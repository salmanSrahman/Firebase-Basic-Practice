import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const PasswordAuth = () => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password should contain at least one uppercase letter");
    }

    setValidated(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      <Container>
        <h3>Please Register</h3>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onBlur={handleEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onBlur={handlePassword}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <h6 className="text-danger">{error}</h6>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default PasswordAuth;
