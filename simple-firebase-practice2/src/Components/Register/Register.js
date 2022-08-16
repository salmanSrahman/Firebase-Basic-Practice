import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import "./Register.css";

const Register = () => {
  const { handleGoogleSignIn } = useFirebase();

  return (
    <div className="">
      <Container>
        <h1>Here is register.</h1>
        <div className="my-5 text-center">
          <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
        </div>
        <div className="form__part">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="already registered?" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
