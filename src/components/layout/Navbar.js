import React from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <Navbar className="navbar" variant="dark" bg="primary" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>Student Portal</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-md-2 w-sm-100 mt-2 mt-md-0"
              />
              <Button
                variant="outline-success"
                className="mt-lg-0 mt-md-0 mt-2 w-sm-100"
              >
                Search
              </Button>
            </Form>
            <Nav className="ml-auto">
              <Link to="/studentform">
                <Button variant="success" className="mt-2 mt-md-0">
                  Add a Student
                </Button>
              </Link>
              <span className="navbar-text ml-3">Admin</span>

              <NavDropdown title="User Name" id="basic-nav-dropdown">
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
