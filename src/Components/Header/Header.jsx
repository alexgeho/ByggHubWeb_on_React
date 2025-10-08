import React, { Component } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";
import './Header.css';

export default class Header extends Component {
    navbar = (
        <Navbar
            fixed="top"
            collapseOnSelect
            expand="md"
            style={{ backgroundColor: "#000509" }}
            variant="dark"
        >
            <Container className="custom-container d-flex justify-content-between align-items-center">
                {/* --- LOGO --- */}
                <img
                    src={logo}
                    height="20"
                    className="d-inline-block align-top"
                    alt="Logo"
                />

                {/* --- TOGGLER (для мобильных) --- */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {/* --- NAVIGATION LINKS --- */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-3 custom-nav">
                        <Nav.Link as={Link} to="/">Hem</Nav.Link>
                        <Nav.Link as={Link} to="/about">Om oss</Nav.Link>
                        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
                    </Nav>

                    {/* --- BUTTONS (LOGIN + TRY FOR FREE) --- */}
                    <div className="d-flex align-items-center gap-2">
                        <Button
                            variant="outline-light"
                            className="px-3"
                            as={Link}
                            to="/login"
                        >
                            Login
                        </Button>

                        <Button
                            variant="primary"
                            className="px-3"
                            as={Link}
                            to="/signup"
                        >
                            Try for free
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

    render() {
        return this.navbar;
    }
}
