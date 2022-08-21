import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const logOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-white">
            Protected Route
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0 nav__container"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/home">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/order">Order</Link>
              {user ? (
                <div>
                  <span className="text-danger fw-bold mx-3">
                    {user?.displayName}
                  </span>
                  <Button onClick={logOut}>Sign Out</Button>
                </div>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
