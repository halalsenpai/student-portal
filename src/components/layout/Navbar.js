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
import { Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

const NavbarComp = () => {
  const user = useSelector((state) => state.firebase.auth.email);

  const firebase = useFirebase();
  let history = useHistory();
  const signOut = async () => {
    await firebase.logout();
    history.push("/login");
  };

  const verifyEmail = async () => {
    var user = await firebase.auth().currentUser;
    user
      .sendEmailVerification()
      .then(function () {
        alert("email has been sent to you");
      })
      .catch(function (error) {
        console.log("verification failed", error);
      });
  };

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

              <NavDropdown title={user} id="basic-nav-dropdown">
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
                <NavDropdown.Item onClick={verifyEmail}>
                  Verify Email
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
