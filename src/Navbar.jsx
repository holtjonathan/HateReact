import { Link } from "react-router-dom";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function NavBarComp() {
  return (
    <Container>
      <Navbar
        className="navbar navbar-expand-lg navbar-dark kcl-blue bottom-align"
        expand="md"
      >
        <Navbar.Brand>
          <Row className="noFlexWrap">
            {/* <Image
              size="mini"
              className="navLogo"
              src={process.env.PUBLIC_URL + "/whiteKclLogo.png"}
            />
            <div className="bottom-align">KCL Hub</div> */}
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="align-to-navbar-bottom"
        >
          <Nav className="mr-auto">
            <NavItem>
              <Link to={process.env.PUBLIC_URL + "/"} className="nav-link">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link to={process.env.PUBLIC_URL + "/hate"} className="nav-link">
                HATE
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBarComp;
