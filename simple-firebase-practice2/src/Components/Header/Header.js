import React from "react";
import { Container, Navbar, Form, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user } = useFirebase();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
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
              <Link to="/register">Register</Link>
              {user.displayName ? (
                user.displayName
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
