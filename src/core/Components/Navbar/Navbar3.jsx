import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import React, { Component, useRef, useState } from "react";
import I18n from "../../../context/i18n/I18n";
//import I18n from '../../../context/i18n/I18n';
import logo from "../../../assets/images/logo.jpg";
import "./Navbar.scss";
import { Avatar } from "@mui/material";

function OffcanvasExample() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => setMenuOpen(false);

  return (
    <>
      {["xs"].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand}>
          <Container fluid>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleMenu}
            ></Navbar.Toggle>
            <Navbar.Brand > <Avatar className="avatar" src={logo} alt="logo"  sx={{ width: 60, height: 60 }}></Avatar></Navbar.Brand>
            {/* <Navbar.Brand ><I18n/></Navbar.Brand> */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              restoreFocus={false}
              show={menuOpen}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Avatar src={logo} alt="logo"></Avatar>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <NavLink as={Link} to={"/"} className="custom-link" onClick={toggleMenu}>
                    <FormattedMessage id="app.home" />
                  </NavLink>
                  <NavLink as={Link} to={"/contact"} className="custom-link" onClick={toggleMenu}>
                    <FormattedMessage id="app.reservar" />
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
