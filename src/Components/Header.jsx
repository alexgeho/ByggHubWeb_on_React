import React, {Component} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo.png';
import {Link} from "react-router-dom";
import '../css/Header.css';


export default class Header extends Component {
    navbar =

        <Navbar fixed="top" collapseOnSelect expand="md" style={{ backgroundColor: "#000509" }} variant="dark">

            <Container className="custom-container d-flex justify-content-between align-items-center">

                <img
                    src={logo}
                    height="20"
                    className="d-inline-block align-top"
                    alt="Logo"
                />

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-3 custom-nav">
                        <Nav.Link as={Link} to="/">
                            Hem
                        </Nav.Link>
                        <Nav.Link as={Link} to="/om_oss">
                            Om oss
                        </Nav.Link>
                        <Nav.Link as={Link} to="/kontakt">
                            Kontakt
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blog">
                            Blog
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <Button variant="outline-light">Try for free</Button>

            </Container>

        </Navbar>


    render() {
        return this.navbar;
    }
}
