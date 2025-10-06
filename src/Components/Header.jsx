import React, {Component} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo.png';
import {Link} from "react-router-dom";
import '../css/Header.css';


export default class Header extends Component {
    navbar =

        <Navbar fixed="top" collapseOnSelect expand="md" bg="primary" variant="dark">

            <Container fluid className="d-flex justify-content-evenly">

                <img
                    src={logo}
                    height="20"
                    className="d-inline-block align-top"
                    alt="Logo"
                />

                <Nav>
                    <Nav.Link as={Link} to="/">Hem</Nav.Link>
                    <Nav.Link as={Link} to="/om_oss">Om oss</Nav.Link>
                    <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                </Nav>

                <Button variant="outline-info">
                    Try for free
                </Button>

            </Container>

        </Navbar>


    render() {
        return this.navbar;
    }
}
