import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from '../img/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hem from "../Pages/Hem";
import Kontakt from "../Pages/Kontakt";
import OmOss from "../Pages/Om_oss";
import Blog from "../Pages/Blog";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar fixed="top" collapseOnSelect expand="md" bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                <img
                                    src={logo}
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />{' '}
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Hem</Nav.Link>
                                    <Nav.Link as={Link} to="/om_oss">Om oss</Nav.Link>
                                    <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
                                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                </Nav>

                                <Form className="d-flex">
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        className="me-2"
                                    />
                                    <Button variant="outline-info">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    {/* Контейнер для рендеринга страниц */}
                    <Container style={{ marginTop: "80px" }}>
                        <Routes>
                            <Route path="/" element={<Hem />} />
                            <Route path="/om_oss" element={<OmOss />} />
                            <Route path="/kontakt" element={<Kontakt />} />
                            <Route path="/blog" element={<Blog />} />
                        </Routes>
                    </Container>
                </>
            </Router>
        );
    }
}
